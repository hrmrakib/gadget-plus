export async function GET(request) {
  const res = await fetch("/data/blog.json");
  const data = res.json();
  return data;
}
