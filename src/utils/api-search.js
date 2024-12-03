import api from "./api";

export async function searchImage(params) {
  const url = "/search/photos";
  return await api.get(url, {
    params: {
      params,
    },
  });
}
