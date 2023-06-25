export default async function TwelveTopImdb(page) {
  let res = await fetch(`https://moviesapi.ir/api/v1/movies?page=${page}`);
  res = await res.json();
  return res;
}
