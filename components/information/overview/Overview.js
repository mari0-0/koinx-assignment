import AboutBitcoin from "./AboutBitcoin";
import CryptoTracker from "./CrytpoTracker";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import Team from "./Team";
import Tokenomics from "./Tokenomics";

const Overview = ({coinData}) => {
  return (
    <div className="flex flex-col gap-8">
      <Performance coinData={coinData}/>
      <Sentiment />
      <AboutBitcoin />
      <Tokenomics />
      <Team />
      <CryptoTracker />
    </div>
  );
};

export default Overview;
