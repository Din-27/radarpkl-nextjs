"use client";

import Image from "next/image";
import Link from "next/link";
import ContentLoader from "./components/ContentLoader";
// import Pagination from "./components/Pagination";
import Carousel from "./components/Carousel";
import BannerIklan from "./components/BannerIklan";
import CatatanDisway from "./components/CatatanDisway";
import Terpopuler from "./components/Terpopuler";
import VideoSection from "./components/VideoSection";

export default function Body({
  title,
  data,
}) {
  return (
    <>
      {data ? (
        <div>
          <div className="lg:container md:mx-auto">
            {/* banner 1 */}
            <BannerIklan src={require('../../public/iklan_banner_satu.jpg')} />
            {/* banner 2 */}
            <BannerIklan src={require('../../public/iklan_banner_dua.webp')} />
            <div className="flex justify-center p-5 sm:flex-col">
              <div>
                <Carousel />
                <div className="h-full ">
                  <h1 className="text-lg font-bold">{`${title ? title : "Berita Terkini"
                    }`}</h1>
                  {data.map((item) => (
                    <div className="flex p-4 sm:py-4" key={item.id}>
                      <Image
                        width={150}
                        height={150}
                        src={item.ImageURL ? item.ImageURL : ""}
                        srcSet={`${item.ImageURL} 600w, ${item.ImageURL} 1200w, ${item.ImageURL} 1800w`}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                          href={`/post/${item.id}`}
                          className="font-semibold "
                        >
                          {item.Judul}
                        </Link>
                        <span className="flex items-center">
                          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                            {item.Kategori}
                          </p>
                          <p className="font-bold text-sm">
                            {item.created_at.substring(0, 10)}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-center w-full md:p-4">
                    <BannerIklan src={require('../../public/BANNER_DPRD_KOTA.webp')} />
                  </div>
                  <div>
                    <div className="h-full ">
                      {data.map((item) => (
                        <div className="flex p-4 sm:py-4" key={item.id}>
                          <Image
                            quality={30}
                            width={150}
                            height={150}
                            src={item.ImageURL ? item.ImageURL : ""}
                            srcSet={`${item.ImageURL} 600w, ${item.ImageURL} 1200w, ${item.ImageURL} 1800w`}
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt=""
                            className="min-w-40 sm:min-w-28 pr-4 "
                          />
                          <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                            <Link
                              href={`/post/${item.id}`}
                              className="font-semibold "
                            >
                              {item.Judul}
                            </Link>
                            <span className="flex items-center">
                              <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                                {item.Kategori}
                              </p>
                              <p className="font-bold text-sm">
                                {item.created_at.substring(0, 10)}
                              </p>
                            </span>
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-center w-full md:p-4">
                        <BannerIklan src={require('../../public//BANNER_BATANG.webp')} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-full md:w-1/3">
                <div>
                  <div cl></div>
                </div>
                <CatatanDisway />
                <Terpopuler data={data} />
              </div>
            </div>
            <VideoSection title={"VIDEO"} />
            <div className="flex justify-center p-5 sm:flex-col">
              <div>
                <div className="h-full ">
                  {data.map((item) => (
                    <div className="flex p-4 sm:py-4" key={item.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={item.ImageURL ? item.ImageURL : ""}
                        srcSet={`${item.ImageURL} 600w, ${item.ImageURL} 1200w, ${item.ImageURL} 1800w`}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                          href={`/post/${item.id}`}
                          className="font-semibold "
                        >
                          {item.Judul}
                        </Link>
                        <span className="flex items-center">
                          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                            {item.Kategori}
                          </p>
                          <p className="font-bold text-sm">
                            {item.created_at.substring(0, 10)}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-full md:w-1/3">
                <div>
                  <h2 className="text-lg font-bold">Pilihan</h2>
                  {data?.slice(0, 5).map((item, index) => (
                    <ul
                      className=" text-black p-4 flex cursor-pointer bg-white"
                      key={item.id}
                    >
                      {index + 1}
                      <Link href={`/post/${item.id}`}>
                        <li className="mx-2">{item.Judul}</li>
                      </Link>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            {/* VIDEO */}
            <VideoSection title={"NETWORK"} />
            <div className="container flex justify-center p-5 sm:flex-col">
              <div>
                <div className="h-full ">
                  {data.map((item) => (
                    <div className="flex p-4 sm:py-4" key={item.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={item.ImageURL ? item.ImageURL : ""}
                        srcSet={`${item.ImageURL} 600w, ${item.ImageURL} 1200w, ${item.ImageURL} 1800w`}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                          href={`/post/${item.id}`}
                          className="font-semibold "
                        >
                          {item.Judul}
                        </Link>
                        <span className="flex items-center">
                          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                            {item.Kategori}
                          </p>
                          <p className="font-bold text-sm">
                            {item.created_at.substring(0, 10)}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-full md:w-1/3"></div>
            </div>
            <div className="lg:container md:mx-auto">
              <div className=" flex justify-between mx-4">
                <h2 className="font-semibold">Foto</h2>
                <h2 className="font-semibold">Lihat Semua</h2>
              </div>
              <div className="container mx-auto p-6 bg-black"></div>
            </div>
            <div className="container flex justify-center p-5 sm:flex-col">
              <div>
                <div className="h-full ">
                  {data.map((item) => (
                    <div className="flex p-4 sm:py-4" key={item.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={item.ImageURL ? item.ImageURL : ""}
                        srcSet={`${item.ImageURL} 600w, ${item.ImageURL} 1200w, ${item.ImageURL} 1800w`}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                          href={`/post/${item.id}`}
                          className="font-semibold "
                        >
                          {item.Judul}
                        </Link>
                        <span className="flex items-center">
                          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                            {item.Kategori}
                          </p>
                          <p className="font-bold text-sm">
                            {item.created_at.substring(0, 10)}
                          </p>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-full md:w-1/3"></div>
            </div>

            {/* <Pagination
              setPage={setPage}
              page={page}
              getData={getData}
              handleNext={handleNext}
              handlePrevious={handlePrevious}

              // lenght={currentPost?.lenght}
            /> */}
          </div>
        </div>
      ) : (
        <ContentLoader />
      )}
    </>
  );
}
