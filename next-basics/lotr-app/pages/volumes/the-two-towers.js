import { volumes } from "@/lib/data";
import Link from "next/link";
import { Fragment } from "react";

const volume = "the-two-towers";
const volumeData = volumes.find(({ slug }) => slug === volume);

export default function TheTwoTowers() {
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
    </Fragment>
  );
}
