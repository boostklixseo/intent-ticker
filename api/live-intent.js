export default async function handler(req, res) {
  try {
    const feed = [];
    const now = new Date();

    // Demo data - replace with real API calls later
    feed.push(
      {
        company: "Acme Robotics",
        city: "Austin",
        region: "TX",
        country: "US",
        signal: "Visited Pricing Page",
        source: "Demo",
        timestamp: now.toISOString(),
      },
      {
        company: "Orchard Health",
        city: "New York",
        region: "NY",
        country: "US",
        signal: "Surge Score: 85",
        source: "Demo",
        timestamp: now.toISOString(),
      },
      {
        company: "Pioneer Logistics",
        city: "Columbus",
        region: "OH",
        country: "US",
        signal: "Surge Score: 72",
        source: "Demo",
        timestamp: now.toISOString(),
      }
    );

    res.status(200).json(feed);
  } catch (e) {
    console.error("API error", e);
    res.status(500).json({ error: "internal_error" });
  }
}
