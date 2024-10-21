import { Footer } from "@/components/Footer";
import Links from "@/components/Links";
import Image from "next/image";

export const metadata = {
  title: "Haerin Page", // このページ固有のタイトル
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Haerin Page</li>
          <li className="mb-2">Haerinめっちゃ美人！</li>
          <li className="mb-2">Attention</li>
        </ol>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
