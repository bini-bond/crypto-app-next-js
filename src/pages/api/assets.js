// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   const assets = [
//     { id: 1, name: 'BTC/USD', lastTrade: '$63,000.00', change24h: '-2.21%', changeValue24h: '-$1,426.18' },
//     { id: 2, name: 'ETH/USD', lastTrade: '$3,408.90', change24h: '-0.33%', changeValue24h: '-$11.20' },
//     { id: 3, name: 'DOGE/USD', lastTrade: '$0.15', change24h: '+15.75%', changeValue24h: '+$0.02' },
//     { id: 4, name: 'ALGO/USD', lastTrade: '$0.15', change24h: '+0.00%', changeValue24h: '$0.00' },
//     { id: 5, name: 'DOT/USD', lastTrade: '$5.64', change24h: '+0.00%', changeValue24h: '$0.00' },
//     { id: 6, name: 'UNI/USD', lastTrade: '$9.79', change24h: '+0.00%', changeValue24h: '$0.00' },
//     { id: 7, name: 'COMP/USD', lastTrade: '$45.67', change24h: '-0.95%', changeValue24h: '-$0.44' },
//   ]
//   res.status(200).json(assets)
// }

// pages/api/assets/index.js
import dbConnect from '../../utils/dbConnect';
import Asset from '../../models/Asset';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const asset = new Asset(req.body);
      await asset.save();
      res.status(201).json({ success: true, data: asset });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const assets = await Asset.find({});
      res.status(200).json({ success: true, data: assets });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

