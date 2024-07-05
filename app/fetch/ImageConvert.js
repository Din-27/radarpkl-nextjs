export const ImageConvert = async (imageData) => {
    const response = await fetch('/api/convert-to-webp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageData }),
    });

    if (response.ok) {
        const data = await response.blob();
        return URL.createObjectURL(data);
    }
    return null
}