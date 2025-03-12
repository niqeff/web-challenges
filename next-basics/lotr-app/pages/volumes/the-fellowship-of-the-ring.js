import { volumes } from "@/lib/data";
import Link from "next/link";
import { Fragment } from "react";
import Image from "next/image";

const volume = "the-fellowship-of-the-ring";
const volumeData = volumes.find(({ slug }) => slug === volume);

export default function TheFellowshipOfTheRing() {
  return (
    <Fragment>
      <Link href="/">← All Volumes</Link>
      <h1>{volumeData.title}</h1>
      <p>{volumeData.description}</p>
      <ul>
        <li>
          {volumeData.books[0].ordinal}: {volumeData.books[0].title}
        </li>
        <li>
          {volumeData.books[1].ordinal}: {volumeData.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={140}
        width={230}
        alt="Book cover of 'The Fellowship Of The Ring'"
      />
    </Fragment>
  );
}
