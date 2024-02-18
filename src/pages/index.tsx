import type { NextPage } from "next";
import PostType from "@/types/PostType";
import Link from "next/link";

const Home: NextPage<{
  staticPostList: PostType[];
}> = ({ staticPostList }) => {
  return (
    <div className="p-4">
      {staticPostList.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
      <p className="mt-4">
        <Link href="/form/" className="underline">
          お問い合わせはこちら
        </Link>
      </p>
    </div>
  );
};

export async function getServerSideProps() {
  const staticPostList = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`,
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return [];
    });

  return {
    props: {
      staticPostList,
    },
  };
}

export default Home;

export const config = {
  runtime: "experimental-edge",
};
