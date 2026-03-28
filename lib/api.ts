const BASE = process.env.BACKEND_URL ?? 'http://localhost:8080';

export async function listItems() {
  const response = await fetch(`${BASE}/invoices`);
  if (!response.ok) throw new Error(`backend returned ${response.status}`);
  return response.json();
}
