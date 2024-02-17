// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler() {
  return Response.json({ name: "John Doe" });
}

export const config = {
  runtime: "edge",
};
