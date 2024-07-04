import Image from "next/image";

export default function BannerIklan({ src, props }) {
  return (
    <div className="flex justify-center w-full md:p-4">
      <Image
        {...props}
        src={src}
        width={src.width}
        height={800}
        alt="iklan honda"
      />
    </div>
  );
}
