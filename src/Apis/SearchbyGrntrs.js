export default async function SearchbyGrners(id, page) {
  let res = await fetch(
    `https://moviesapi.ir/api/v1/genres/${id}/movies?page=${page}`
  );
  res = await res.json();
  return res;
}
