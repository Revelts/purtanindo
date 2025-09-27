import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		res.setHeader('Allow', 'GET');
		return res.status(405).end('Method Not Allowed');
	}

	const pdfPathCandidates = [
		path.join(process.cwd(), 'public', 'files', 'profile.pdf'),
		path.join(process.cwd(), 'files', 'profile.pdf'),
	];

	const existing = pdfPathCandidates.find(p => fs.existsSync(p));
	if (!existing) {
		return res.status(404).json({ error: 'CV file not found on server.' });
	}

	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Disposition', 'attachment; filename="profile.pdf"');
	const stream = fs.createReadStream(existing);
	stream.pipe(res);
}


