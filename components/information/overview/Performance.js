import { formatNumber, formatTimeWithDifference } from "@/lib/utils";
import { Triangle } from "lucide-react";

const Performance = ({ coinData }) => {
  return (
    <section className="w-full p-3 lg:p-6 bg-white rounded-md text-sm lg:text-[16px]">
      <h2 className="text-3xl font-semibold">Performance</h2>

      <div className="mt-12 w-full flex justify-between items-center ">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-secondary-100 text-center">Today's Low</p>
          <p>46,930.22</p>
        </div>
        <div className="w-3/4">
          <div
            className="w-full h-2 rounded-full relative"
            style={{
              background:
                "linear-gradient(to right, #FF4949, #FF4E11, #FC870A, #FFAF11, #C2CB21, #11EB68)",
            }}
          >
            <p className="absolute top-2 left-[30%] w-fit flex flex-col jusity-center items-center  gap-1">
              <Triangle fill="black" size={12} />
              <span className="text-sm">$48,637.83</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-secondary-100 text-center">Today's High</p>
          <p>49,343.14</p>
        </div>
      </div>

      <div className="mt-8 w-full flex justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-secondary-100 text-center">52W Low</p>
          <p>16,930.22</p>
        </div>
        <div className="w-3/4">
          <div
            className="w-full h-2 rounded-full relative"
            style={{
              background:
                "linear-gradient(to right, #FF4949, #FF4E11, #FC870A, #FFAF11, #C2CB21, #11EB68)",
            }}
          >
            {/* <p className="absolute top-2 left-[75%] w-fit flex flex-col jusity-center items-center  gap-1">
            <Triangle fill size={12}/>
            <span className="text-sm">$48,637.83</span>
          </p> */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-secondary-100 text-center">52W High</p>
          <p>49,743.14</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold flex gap-2 items-center">
          Fundamentals
          <img src="/info.png" alt="info" className="cursor-pointer" />
        </h3>

        <div className="mt-6 w-full flex gap-4 lg:gap-8 flex-col lg:flex-row">
          <div className="w-full">
            <div className="w-full py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">Bitcoin Price</p>
              <p>
                ${formatNumber(coinData.market_data.current_price.usd, "en-US")}
              </p>
            </div>

            <div className="w-full h-[74px] py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">24h Low / 24h High</p>
              <p>
                ${formatNumber(coinData.market_data.low_24h.usd, "en-US")} / $
                {formatNumber(coinData.market_data.high_24h.usd, "en-US")}
              </p>
            </div>

            <div className="w-full h-[74px] py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">7d Low / 7d High</p>
              <p>
                ${formatNumber(coinData.market_data.low_24h.usd, "en-US")} / $
                {formatNumber(coinData.market_data.high_24h.usd, "en-US")}
              </p>
            </div>

            <div className="w-full h-[74px] py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">Trading Volume</p>
              <p>
                ${formatNumber(coinData.market_data.total_volume.usd, "en-US")}
              </p>
            </div>

            <div className="w-full h-[74px] py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">Market Cap Rank</p>
              <p>#{coinData.market_cap_rank}</p>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">Market Cap</p>
              <p>
                ${formatNumber(coinData.market_data.market_cap.usd, "en-US")}
              </p>
            </div>

            <div className="w-full h-[74px] py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">Market Cap Dominance</p>
              <p>38.343%</p>
            </div>

            <div className="w-full h-[74px] py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">Volume / Market Cap</p>
              <p>
                {(
                  coinData.market_data.total_volume.usd /
                  coinData.market_data.market_cap.usd
                ).toFixed(6)}
              </p>
            </div>

            <div className="w-full h-[74px] py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">All-Time High</p>
              <div className="flex flex-col items-end text-sm">
                <p className="flex gap-2">
                  ${formatNumber(coinData.market_data.ath.usd, "en-US")}
                  <span
                    className={`${
                      coinData.market_data.ath_change_percentage.usd < 0
                        ? "text-bear-200"
                        : "text-bull-200"
                    }`}
                  >
                    {formatNumber(
                      coinData.market_data.ath_change_percentage.usd,
                      "en-US"
                    )}
                    %
                  </span>
                </p>
                <p className="text-secondary-100">
                  {formatTimeWithDifference(coinData.market_data.ath_date.eth)}
                </p>
              </div>
            </div>

            <div className="w-full h-[74px] py-4 flex justify-between items-center border-b-2 border-b-neutral-300">
              <p className="text-secondary-100">All-Time Low</p>
              <div className="flex flex-col items-end text-sm">
                <p className="flex gap-2">
                  {" "}
                  ${formatNumber(coinData.market_data.atl.usd, "en-US")}
                  <span
                    className={`${
                      coinData.market_data.atl_change_percentage.usd < 0
                        ? "text-bear-200"
                        : "text-bull-200"
                    }`}
                  >
                    {formatNumber(
                      coinData.market_data.atl_change_percentage.usd,
                      "en-US"
                    )}
                    %
                  </span>
                </p>
                <p className="text-secondary-100">
                  {formatTimeWithDifference(coinData.market_data.atl_date.eth)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
