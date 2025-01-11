"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const AdvancedRealTimeChart = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  }
);

const Chart = ({coinSymbol}) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(window.innerWidth < window.innerHeight);
  }, []);

  return (
    <AdvancedRealTimeChart
      symbol={`BINANCE:${coinSymbol}USD`}
      interval="15"
      theme="light"
      timezone="America/New_York"
      locale="en"
      hide_side_toolbar={isMobileView}
      autosize
    />
  );
};

export default Chart;
