"use client";
import ScrollArea from "@/components/misc/ScrollArea";
import { getTrendingCoins } from "@/lib/utils";
import { useEffect, useState } from "react";

function CryptoCard({ coin }) {
  const change = coin.data.price_change_percentage_24h.usd.toFixed(2);
  const price = coin.data.price.toFixed(9);
  return (
    <div className="min-w-[240px] p-4 bg-white rounded-xl border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <img
          src={coin.thumb}
          width={32}
          height={32}
          alt={coin.name}
          className="rounded-full"
        />
        <span className="font-medium">{coin.symbol}</span>
        <span
          className={`text-sm ${
            change >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {change >= 0 ? "+" : ""}
          {change}%
        </span>
      </div>
      <div className="text-xl font-semibold mb-3">${price}</div>
      <div className="h-[60px] w-full bg-gray-50">
        <img
          src={coin.data.sparkline}
          alt={coin.name}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default function CryptoTracker() {
  const [trendingCoins, setTrendingCoins] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTrendingCoins() {
      setIsLoading(true);
      const coins = await getTrendingCoins();
      setTrendingCoins(coins.slice(0, 10));
      setIsLoading(false);
    }

    fetchTrendingCoins();
  }, []);

  return (
    <section className="w-full p-3 lg:p-6 bg-white rounded-md text-sm lg:text-[16px]">
      {isLoading ? (
        <div className="w-full animate-pulse flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth">
          <div className="bg-slate-300 h-[200px] min-w-[200px] rounded-md"></div>
          <div className="bg-slate-300 h-[200px] min-w-[200px] rounded-md"></div>
          <div className="bg-slate-300 h-[200px] min-w-[200px] rounded-md"></div>
        </div>
      ) : (
        <>
          <ScrollArea title="You May Also Like">
            {trendingCoins.map((coin, i) => (
              <CryptoCard key={i} coin={coin.item} />
            ))}
          </ScrollArea>
          <ScrollArea title="Trending Coins">
            {trendingCoins.map((coin, i) => (
              <CryptoCard key={i} coin={coin.item} />
            ))}
          </ScrollArea>
        </>
      )}
    </section>
  );
}
