import mongoose from 'mongoose';
import Asset from '../models/Asset.js';
import dbConnect from '../utils/dbConnect.js';

async function seedAssets() {
  await dbConnect();

  const assets = [
    {
      name: "BTC",
      iconPath: "/icons/bitcoin.svg",
      lastTrade: "30,000 USD",
      change24h: "+3.5%",
      changeValue24h: "+1,000 USD"
    },
    {
      name: "ETH",
      iconPath: "/icons/ethereum.svg",
      lastTrade: "2,000 USD",
      change24h: "+2.1%",
      changeValue24h: "+42 USD"
    },
    {
      name: "DOGE",
      iconPath: "/icons/dogecoin.svg",
      lastTrade: "0.25 USD",
      change24h: "+8.2%",
      changeValue24h: "+0.019 USD"
    },
    {
      name: "ALGO",
      iconPath: "/icons/algocoin.svg",
      lastTrade: "350 USD",
      change24h: "+4.7%",
      changeValue24h: "+15.75 USD"
    },
    {
      name: "DOT",
      iconPath: "/icons/dotcoin.svg",
      lastTrade: "1.50 USD",
      change24h: "+5.0%",
      changeValue24h: "+0.075 USD"
    },
    {
      name: "UNI",
      iconPath: "/icons/unicoin.svg",
      lastTrade: "1.50 USD",
      change24h: "+5.0%",
      changeValue24h: "+0.075 USD"
    },
    {
      name: "COMP",
      iconPath: "/icons/compcoin.svg",
      lastTrade: "1.50 USD",
      change24h: "+5.0%",
      changeValue24h: "+0.075 USD"
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
