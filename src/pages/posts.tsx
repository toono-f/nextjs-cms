import type { NextPage } from "next";
import PostType from "@/types/PostType";
import PostService from "@/serivces/PostService"; // 注意: "services"のスペルミスがあるようです。正しくは "@/services/PostService" かもしれません。

const Home: NextPage<{
  staticPostList: PostType[];
}> = ({ staticPostList }) => {
  return (
    <div>
      {staticPostList.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
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
