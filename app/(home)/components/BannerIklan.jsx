import Image from "next/image";

export default function BannerIklan({ src }) {
  return (
    <div className="flex justify-center w-full md:p-4">
      {src !== 'iklan_banner_dua' ?
        <Image
          src={src}
          width={1200}
          height={800}
          alt="iklan honda"
          fetchPriority="high"
          priority
          loading="eager"
          className="w-screen"
        />
        :
        <div className="w-full lg:h-64 h-24 mt-1 bg-white p-4"><h1>Ini Iklan</h1></div>}
    </div>
  );
}
