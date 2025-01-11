import { Triangle } from "lucide-react";
import React from "react";
import Chart from "@/components/hero/Chart";
import { formatNumber } from "@/lib/utils";

const Hero = ({ coinData }) => {
  return (
    <section className="w-full p-3 pb-6 lg:p-6 bg-white rounded-md">
      <div className="w-full">
        <div className="flex items-center gap-2">
          <img src={coinData.image.large} alt="btc" className="w-8 h-8" />
          <h2 className="text-3xl font-semibold capitalize">{coinData.name}</h2>
          <h4 className="text-neutral-600 font-semibold uppercase">
            {coinData.symbol}
          </h4>

          <button className="h-full ml-4 px-3 py-2 bg-[#808A9D] rounded-lg text-white">
            Rank #{coinData.market_cap_rank}
          </button>
        </div>

        <div className="mt-8 flex gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-semibold">
              ${formatNumber(coinData.market_data.current_price.usd, "en-US")}
            </h2>
            <h2 className="text-xl font-semibold text-neutral-700">
              ₹{formatNumber(coinData.market_data.current_price.inr, "en-IN")}
            </h2>
          </div>
          <div className="h-fit flex gap-2 items-center">
            <p className="ml-4 px-2 py-1 bg-bull-100 rounded-lg text-sm text-bull-200 flex items-center gap-2">
              <span className="">
                <Triangle fill="#14B079" size={14} />
              </span>
              <span>
                {coinData.market_data.price_change_percentage_24h.toFixed(4)} %
              </span>
            </p>
            <p className="text-sm text-neutral-600 ">(24H)</p>
          </div>
        </div>
      </div>

      <div className=" mt-8 w-full h-[550px]">
        <Chart coinSymbol={coinData.symbol} />
      </div>
    </section>
  );
};

export default Hero;
