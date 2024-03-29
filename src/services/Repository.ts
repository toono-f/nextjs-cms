import axios from "axios";

const repository = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WP_ENDPOINT}/index.php?graphql`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`,
  },
});

const Repository = (query: string, { variables }: Record<string, any> = {}) => {
  const body = {
    query,
    variables,
  };

  return {
    getWp() {
      return repository.post("", body);
    },
  };
};

export default Repository;
