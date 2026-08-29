const urls = ["https://www.apconsultancy.in", "https://ap-consultancy-omega.vercel.app"];
for (const base of urls) {
  const html = await (await fetch(`${base}/`, { cache: "no-store" })).text();
  const fav = await fetch(`${base}/favicon.png`, { cache: "no-store" });
  const favBuf = await fav.arrayBuffer();
  console.log(JSON.stringify({
    base,
    htmlHasV3: html.includes("v=3"),
    htmlHasManifest: html.includes("site.webmanifest"),
    faviconBytes: favBuf.byteLength,
    faviconType: fav.headers.get("content-type"),
  }));
}
