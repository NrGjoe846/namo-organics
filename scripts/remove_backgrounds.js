import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');

const productImages = [
  'namo-panchakavya-fertilizer-pesticide.png',
  'namo-algae-extract-liquid.png',
  'namo-cold-pressed-edible-oils.jpg',
  'namo-desi-cow-ghee-pot.jpg',
  'namo-pure-wild-honey.png',
  'namo-organic-jaggery-powder.png',
  'namo-organic-pulses-dals.jpg',
  'namo-organic-rice-wheat-grains.png',
  'namo-organic-spices-turmeric-pepper.png',
  'namo-dryfruits-nuts.png',
  'namo-traditional-jaggery-chikki-candies.jpg',
  'NAMO Algae Extract Bottle.png',
  'NAMO Panchakavya Organic Fertilizer Bottle.png'
];

async function removeBackground(file) {
  const filePath = path.join(assetsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping missing file: ${file}`);
    return;
  }

  try {
    const image = await Jimp.read(filePath);
    const { width, height, data } = image.bitmap;

    // Helper to get rgba at (x, y)
    const getPixel = (x, y) => {
      const idx = (y * width + x) * 4;
      return {
        r: data[idx],
        g: data[idx + 1],
        b: data[idx + 2],
        a: data[idx + 3]
      };
    };

    // Sample the 4 corners
    const corners = [
      getPixel(0, 0),
      getPixel(width - 1, 0),
      getPixel(0, height - 1),
      getPixel(width - 1, height - 1),
      getPixel(Math.floor(width / 2), 0),
      getPixel(0, Math.floor(height / 2))
    ];

    const avgR = corners.reduce((acc, p) => acc + p.r, 0) / corners.length;
    const avgG = corners.reduce((acc, p) => acc + p.g, 0) / corners.length;
    const avgB = corners.reduce((acc, p) => acc + p.b, 0) / corners.length;

    console.log(`Processing ${file} (${width}x${height}) - bg ~ rgb(${Math.round(avgR)}, ${Math.round(avgG)}, ${Math.round(avgB)})`);

    // Flood/scan transparency for pixels close to background color or near-white
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        const dist = Math.sqrt(
          Math.pow(r - avgR, 2) +
          Math.pow(g - avgG, 2) +
          Math.pow(b - avgB, 2)
        );

        // Check if pixel is near-white or matches outer background
        const isWhite = r > 230 && g > 230 && b > 230;
        const isBgMatch = dist < 50 && (r > 190 && g > 190 && b > 190);

        if (isWhite || isBgMatch) {
          if (dist < 25 || (r > 242 && g > 242 && b > 242)) {
            data[idx + 3] = 0; // Completely transparent
          } else {
            // Smooth edge alpha feathering
            const factor = Math.max(0, Math.min(1, (dist - 20) / 30));
            data[idx + 3] = Math.round(a * factor);
          }
        }
      }
    }

    const targetPngName = file.replace(/\.jpg$/, '.png');
    const targetPath = path.join(assetsDir, targetPngName);

    await image.write(targetPath);
    console.log(`✓ Saved transparent image: ${targetPngName}`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
}

async function main() {
  for (const img of productImages) {
    await removeBackground(img);
  }
  console.log('Finished background removal on all product images.');
}

main();
