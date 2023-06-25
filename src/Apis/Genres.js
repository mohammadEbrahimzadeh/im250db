export default async function Genres() {
  let res = await fetch("https://moviesapi.ir/api/v1/genres");
  res = await res.json();
  return res;
}
