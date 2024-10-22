import { Footer } from "@/components/Footer";
import Headline from "@/components/Headline";
import Links from "@/components/Links";
import Image from "next/image";

export const metadata = {
  title: "Hanni Page", // このページ固有のタイトル
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Headline
          title="Hanni Page!"
          message="ハニめっちゃかわいい！"
          song="Ditto"
        />
        <Links />
      </main>
      <Footer />
    </div>
  );
}
