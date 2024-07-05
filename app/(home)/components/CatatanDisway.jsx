import Image from "next/image";
import Link from "next/link";

const dataLink = [
  {
    title: '1. Daging Babi',
    url: 'https://disway.id/read/798306/daging-babi?_gl=1*3oozdl*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg..'
  },
  {
    title: '2. Pusat Data',
    url: 'https://disway.id/read/798010/pusat-data?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg..'
  },
  {
    title: '3. Terbakar? Dibakar?',
    url: 'https://disway.id/read/797654/terbakar-dibakar?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg..'
  },
  {
    title: '4. Gundah Marah',
    url: 'https://disway.id/read/797461/gundah-marah?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg..'
  },
  {
    title: '5. Humor Gagap',
    url: 'https://disway.id/read/797189/humor-gagap?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg..'
  }
]

export default function CatatanDisway() {
  return (
    <div className="">
      <span className="flex justify-evenly bg-red-600 p-2">
        {" "}
        <Image
          src="/logo-disway-head.png"
          width={40}
          height={40}
          quality={20}
          alt="disway"
          loading="eager"
        />
        <p className="text-white self-center">CATATAN DAHLAN ISKAN</p>
      </span>
      <ul className="bg-white p-2">
        {dataLink.map((x, y) =>
          <Link
            key={y}
            href={x.url}
          >
            <li className="p-2">{x.title}</li>
          </Link>
        )}
      </ul>
    </div>
  );
}
