import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function handleClick() {
    const randSlug = volumes[Math.floor(Math.random() * volumes.length)].slug;
    router.push(`/volumes/${randSlug}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick}>Jump to random volume</button>
    </>
  );
}
