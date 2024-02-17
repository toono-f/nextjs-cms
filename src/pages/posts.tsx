import type { NextPage } from "next";
import PostType from "@/types/PostType";
import PostService from "@/serivces/PostService";

const Home: NextPage<{
  staticPostList: PostType[]; // 型の指定をする場所に注意！
}> = ({ staticPostList }) => {
  return (
    <div>
      {staticPostList.map((post) => {
        return <p key={post.id}>{post.title}</p>; // 一個ずつ表示させる
      })}
    </div>
  );
};

export async function getStaticProps() {
  const staticPostList = await PostService.getList(); // postListをとってくる

  return {
    props: {
      staticPostList,
    },
  };
}

export default Home;
