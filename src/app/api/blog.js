export async function GET(request) {
  const res = await fetch(process.env.URL + "/data/blog.json");
  const data = res.json();
  return data;
}
