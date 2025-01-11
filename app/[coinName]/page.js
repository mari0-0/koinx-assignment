import Hero from "@/components/hero/Hero";
import Tabs from "@/components/information/Tabs";
import Breadcrumb from "@/components/misc/Breadcrumb";
import GetStarted from "@/components/misc/GetStarted";
import TrendingCoins from "@/components/misc/TrendingCoins";
import Navbar from "@/components/navbar/Navbar";
import { getDetailedCoinData } from "@/lib/utils";

export default async function Home({ params }) {
  const { coinName } = await params;
  const coinData = await getDetailedCoinData(coinName);
  console.log(coinData);

  return (
    <>
      {coinData.error ? (
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-5xl font-semibold">Coin not found</h1>
        </div>
      ) : (
        <main className="w-full font-body">
          <Navbar />
          <div className="w-full px-[5vw] pb-8 bg-background">
            <Breadcrumb coinName={coinData.name} />
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-9/12">
                <Hero coinData={coinData} />
                <Tabs coinData={coinData} />
              </div>
              <div className="w-full lg:w-3/12 flex flex-col gap-8">
                <GetStarted />
                <TrendingCoins />
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
