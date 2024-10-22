import Image from "next/image";

export const metadata = {
  title: "Haerin Page", // このページ固有のタイトル
};

type HeadlineProps = {
  title: string;
  message: string;
  song: string;
};

export default function Headline(props: HeadlineProps) {
  return (
    <>
      <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">{props.title}</li>
        <li className="mb-2">{props.message}</li>
        <li className="mb-2">{props.song}</li>
      </ol>
    </>
  );
}
