import Image from "next/image";

export default function BannerIklan({ src }) {
  return (
    <div className="flex justify-center w-full md:p-4">
      {src !== 'iklan_banner_dua' ? < Image
        src={src}
        width={1200}
        height={800}
        alt="iklan honda"
        fetchPriority="high"
        priority
        loading="eager"
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-screen"
      />
        :
        <div className="w-full h-32 bg-white" />}
    </div>
  );
}
