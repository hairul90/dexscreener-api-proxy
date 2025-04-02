export default async function handler(req, res) {
  const r = await fetch("https://api.dexscreener.com/latest/dex/pairs", {
    headers: {
      "accept": "application/json",
      "user-agent": "Mozilla/5.0"
    }
  });
  const json = await r.json();
  res.status(200).json(json);
}
