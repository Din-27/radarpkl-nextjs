import sharp from 'sharp';
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { image } = req.body;

            const imageBuffer = Buffer.from(image, 'base64');
            const tempFilePath = './storage/' + image.name;

            fs.writeFileSync(tempFilePath, imageBuffer);


            const outputFilePath = './storage/' + image.name + '.webp';

            await sharp(tempFilePath)
                .toFormat('webp')
                .webp({ quality: 80 })
                .toFile(outputFilePath);


            const webpBuffer = fs.readFileSync(outputFilePath);
            res.setHeader('Content-Type', 'image/webp');
            res.status(200).send(webpBuffer);


            fs.unlinkSync(tempFilePath);
            fs.unlinkSync(outputFilePath);
        } catch (error) {
            console.error('Error converting image:', error);
            res.status(500).json({ error: 'Failed to convert image' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
