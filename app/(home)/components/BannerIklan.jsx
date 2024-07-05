import Image from "next/image";

export default function BannerIklan({ src }) {
  return (
    <div className="flex justify-center w-full md:p-4">
      <Image
        src={src}
        width={src.width}
        height={800}
        alt="iklan honda"
        fetchPriority="high"
        priority
        loading="eager"
        layout="responsive"
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-screen"
      />
    </div>
  );
}
