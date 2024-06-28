import mongoose from 'mongoose';

const AssetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  iconPath: { type: String, required: true },
  lastTrade: { type: String, required: true },
  change24h: { type: String, required: true },
  changeValue24h: { type: String, required: true },
});

export default mongoose.models.Asset || mongoose.model('Asset', AssetSchema);
