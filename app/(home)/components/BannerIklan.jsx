import Image from "next/image";

export default function BannerIklan({ src }) {
  return (
    <div className="flex justify-center w-full md:p-4">
      <Image
        src={src}
        width={src.width}
        height={src.height}
        quality={10}
        alt="iklan honda"
        priority
      />
    </div>
  );
}
