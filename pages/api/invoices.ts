import type { NextApiRequest, NextApiResponse } from 'next';
import { listItems } from '../../lib/api';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(await listItems());
}
