import type { NextPage } from "next";
import PostType from "@/types/PostType";
import PostService from "@/services/PostService";
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
  const staticPostList = await PostService.getList();
  return {
    props: {
      staticPostList,
    },
  };
}

export default Home;
