import { Image } from "./Image.jsx";

export function Logo({ src }) {
  return (
    <>
      <a href="#">
        <Image src={src} alt="logo"></Image>
      </a>
    </>
  );
}
