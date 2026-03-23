export default async function handler(req, res) {
  // Put your PUBLIC Google Sheet CSV link inside these quotes
  const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTy40h0_CHqbhwXNq9Ztf1agTn3EMM_c1YKVevPi_rPs5XKQOIgfsgTj7eLiv1jUpjRL1MbcjM-cyGQ/pub?gid=0&single=true&output=csv';

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
