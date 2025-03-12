import { volumes } from "@/lib/data";
import Link from "next/link";
import { Fragment } from "react";

const volume = "the-return-of-the-king";
const volumeData = volumes.find(({ slug }) => slug === volume);

export default function TheReturnOfTheKing() {
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
        src="/images/the-return-of-the-king.png"
        height={140}
        width={230}
        alt="Book cover of 'The Return of the King'"
      />
    </Fragment>
  );
}
