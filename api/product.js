export default async function handler(req, res) {
  // Put your PUBLIC Google Sheet CSV link inside these quotes
  const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';

  try {
    // The server fetches the sheet secretly
    const response = await fetch(GOOGLE_SHEET_URL);
    const csvData = await response.text();

    // The server sends the CSV data back to your website
    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(csvData);
  } catch (error) {
    res.status(500).send('Failed to fetch inventory');
  }
}