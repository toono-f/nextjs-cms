import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col gap-4 bg-white p-4 text-black ${inter.className}`}
    >
      <h1>お問合せフォーム</h1>
      <form
        method="post"
        className="flex flex-col gap-4"
        action="https://hyperform.jp/api/MqV1Rle3"
      >
        <div className="flex flex-col">
          <label>お名前</label>
          <input
            type="text"
            name="お名前"
            placeholder="例）山田太郎"
            required
            className="border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label>メールアドレス</label>
          <input
            type="email"
            name="email"
            placeholder="例）example@example.com"
            className="border-2 border-gray-300"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>お問い合わせ内容</label>
          <textarea
            name="お問い合わせ内容"
            required
            className="border-2 border-gray-300"
          />
        </div>
        <button type="submit" className="border-2 bg-gray-900  p-4 text-white">
          送信
        </button>
      </form>

      <p className="mt-4">
        <Link href="/" className="underline">
          トップに戻る
        </Link>
      </p>
    </main>
  );
}
