export default async function handler(req, res) {
  try {
    const r = await fetch("https://api.dexscreener.com/latest/dex/pairs", {
      headers: {
        "accept": "application/json",
        "user-agent": "Mozilla/5.0"
      }
    });

    const json = await r.json();

    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
