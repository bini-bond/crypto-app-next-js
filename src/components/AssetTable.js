// components/AssetTable.js

export default function AssetTable({ assets }) {
  return (
    <div className="w-full flex justify-center ">
  <div className="assets-table w-[1180px] pt-[30px] pl-[41px] pr-[41px]">
    <table className="min-w-full">
      <thead>
        <tr className="border-b">
          <th className="py-2 px-4 text-left">ASSETS</th>
          <th className="py-2 px-4 text-left">LAST TRADE</th>
          <th className="py-2 px-4 text-left">24H %</th>
          <th className="py-2 px-4 text-left">24H CHANGE</th>
          <th className="py-2 px-4 text-right">MORE</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr key={asset._id} className="">
            <td className="py-2 px-4 flex items-center">
              <img src={asset.iconPath} alt={asset.name} className="h-[60px] w-[60px] mr-2" />
              {asset.name}<span className="usd-txt">/USD</span>
            </td>
            <td className="py-2 px-4">{asset.lastTrade}</td>
            <td className={`py-2 px-4 ${asset.change24h.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{asset.change24h}</td>
            <td className={`py-2 px-4 ${asset.changeValue24h.includes('+') ? 'text-green-500' : 'text-red-500'}`}>{asset.changeValue24h}</td>
            <td className="py-2 px-4 text-right">
              <button className="bg-green-500 text-white py-1 px-2 rounded">Trade</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
