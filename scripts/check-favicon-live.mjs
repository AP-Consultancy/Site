const base = "https://www.apconsultancy.in";
const html = await (await fetch(`${base}/`, { cache: "no-store" })).text();
const iconLinks = [...html.matchAll(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]*>/gi)].map((m) => m[0]);
console.log("TITLE:", html.match(/<title>([^<]+)/)?.[1]);
console.log("ICON LINKS:", iconLinks);

for (const path of ["/favicon.ico", "/favicon.png", "/apple-touch-icon.png", "/logo/ap-icon.png", "/favicon.svg"]) {
  const res = await fetch(`${base}${path}`, { cache: "no-store" });
  const buf = await res.arrayBuffer();
  console.log(path, res.status, res.headers.get("content-type"), buf.byteLength);
}
