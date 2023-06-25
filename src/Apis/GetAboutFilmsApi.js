export default async function GetAboutFilmsApi(id) {
  let res = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`);
  res = await res.json();
  return res;
}
let c = document.querySelector(".s");
let x = "www";
