import Image from "next/image";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import { Stats } from "./_components/Stats";
import { Faq } from "./_components/Faq";
import { NewsLetter } from "./_components/NewsLetter";

export default function Home() {
  return (
    <>
    <Hero />
    <Features />
    <Stats />
    <Faq />
    <NewsLetter />
    </>
  );
}
