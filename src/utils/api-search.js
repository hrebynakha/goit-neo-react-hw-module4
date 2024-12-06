import api from "./api";

export async function searchImage(query, page) {
  const url = "/search/photos";
  const { data } = await api.get(url, {
    params: {
      query,
      page,
    },
  });
  console.log(data);
  return data;
}
