import { getTrendingCoins } from "@/lib/utils";
import { Triangle } from "lucide-react";
import React from "react";



const TrendingCoins = async () => {
  let trendingCoins = await getTrendingCoins();
  trendingCoins = trendingCoins.slice(0, 3);
  return (
    <section className="w-full p-3 lg:p-6 bg-white rounded-md">
      <h2 className="text-2xl font-semibold">Trending Coins (24h)</h2>

      <div className="mt-8 flex flex-col gap-2 overflow-auto">
        {trendingCoins.map((coin, i) => {
          const changePercentage =
            coin.item.data.price_change_percentage_24h.usd.toFixed(2);
          const isBearish = changePercentage < 0;
          return (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={coin.item.thumb}
                  alt="btc"
                  className="w-8 h-8 rounded-full"
                />
                <h3 className="text-sm font-semibold">{coin.item.name}</h3>
                <h4 className="text-sm text-neutral-600 font-semibold truncate">
                  ({coin.item.symbol})
                </h4>
              </div>

              <div
                className={`ml-4 px-2 py-1 rounded-lg text-sm flex items-center gap-2  ${
                  isBearish
                    ? "bg-bear-100 text-bear-200"
                    : "bg-bull-100 text-bull-200 "
                }`}
              >
                <span className="">
                  <Triangle
                    fill={isBearish ? "#E96975" : "#14B079"}
                    size={12}
                    className={isBearish ? "rotate-180" : ""}
                  />
                </span>
                <span>{changePercentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingCoins;
