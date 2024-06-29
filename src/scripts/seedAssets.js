import mongoose from 'mongoose';
import Asset from '../models/Asset.js';
import dbConnect from '../utils/dbConnect.js';

async function seedAssets() {
  await dbConnect();

  const assets = [
    {
      name: "BTC",
      iconPath: "/icons/bitcoin.svg",
      lastTrade: "$63,000.00",
      change24h: "-2.21%",
      changeValue24h: "-$1.426.18"
    },
    {
      name: "ETH",
      iconPath: "/icons/ethereum.svg",
      lastTrade: "$3,408.90",
      change24h: "-0.33%",
      changeValue24h: "-$11.20"
    },
    {
      name: "DOGE",
      iconPath: "/icons/dogecoin.svg",
      lastTrade: "$0.15",
      change24h: "+15.75%",
      changeValue24h: "$0.02"
    },
    {
      name: "ALGO",
      iconPath: "/icons/algocoin.svg",
      lastTrade: "$0.15",
      change24h: "+0.00%",
      changeValue24h: "$0.00"
    },
    {
      name: "DOT",
      iconPath: "/icons/dotcoin.svg",
      lastTrade: "$5.64",
      change24h: "+0.00%",
      changeValue24h: "$0.00"
    },
    {
      name: "UNI",
      iconPath: "/icons/unicoin.svg",
      lastTrade: "$9.79",
      change24h: "+0.00%",
      changeValue24h: "$0.00"
    },
    {
      name: "COMP",
      iconPath: "/icons/compcoin.svg",
      lastTrade: "$45.67",
      change24h: "-0.95%",
      changeValue24h: "-$0.44"
    }
  ];
  console.log("starting transaction")
  // await Asset.insertMany(assets);
  await Asset.deleteMany();
  await Asset.insertMany(assets);
  console.log("transaction complete")
  console.log('Assets seeded!');
  mongoose.connection.close();
}

seedAssets();
