// Service worker da SALAMAP — permite abrir a app sem rede.
const CACHE = "salamap-v2";
const ASSETS = ["./", "./index-22.html"];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// Só a navegação é servida; as chamadas externas (Supabase, etc.) nunca são interceptadas.
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;
  e.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      const c = await caches.open(CACHE);
      c.put(req, fresh.clone());
      return fresh;
    } catch (err) {
      const hit = await caches.match(req, { ignoreSearch: true });
      if (hit) return hit;
      if (req.mode === "navigate") {
        const fallback = await caches.match("./index-22.html");
        if (fallback) return fallback;
      }
      return new Response("Sem ligação e sem cópia guardada.", {
        status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" }
      });
    }
  })());
});
