import { WpGraphQlPostConst } from "@/constants/WpGraphQlConst";

export default async function handler() {
  const graphqlQuery = {
    query: WpGraphQlPostConst.list,
  };

  let data: any;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WP_ENDPOINT}/index.php?graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`,
      },
      body: JSON.stringify(graphqlQuery),
    },
  );

  data = await response.json();

  if (data) {
    return Response.json(
      data.data.posts.edges.map((data: any) => {
        return data.node;
      }),
    );
  }

  return [];
}

export const config = {
  runtime: "experimental-edge",
};
