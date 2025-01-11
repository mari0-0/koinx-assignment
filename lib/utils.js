const formatNumber = (num, locale) => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

async function getCoinData(coinName) {
  try{
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd,inr&include_24hr_change=true&precision=2&include_market_cap=true`,
      { next: { revalidate: 60 } } // Caches data for 60 seconds
    );
    const data = await response.json();
    return {
      name: coinName,
      usd: formatNumber(data[coinName].usd, "en-US"),
      inr: formatNumber(data[coinName].inr, "en-IN"),
      priceChange24hr: formatNumber(
        data[coinName].usd_24h_change.toFixed(2),
        "en-US"
      ),
      marketCap: formatNumber(data[coinName].usd_market_cap.toFixed(2), "en-US"),
    };
  } catch (e) {
    console.error(e);
    return {
      error: e.message
    }
  }

}

async function getTrendingCoins() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/search/trending",
    { next: { revalidate: 60 } } // Caches data for 60 seconds
  );
  const data = await response.json();
  const coins = data.coins;
  return coins;
}


async function getDetailedCoinData(coinName) {
  try{
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}`,
      { next: { revalidate: 60 } }
    );
    const data = await response.json();
    return data
  } catch (e) {
    console.error(e);
    return {
      error: e.message
    }
  }

}

function formatTimeWithDifference(timestamp) {
  const ath_date = new Date(timestamp);

  const getTimeDifference = (date) => {
    const now = new Date();
    const diffInMs = now - date;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365); // Convert ms to years

    return `about ${Math.round(diffInYears)} year${Math.round(diffInYears) !== 1 ? "s" : ""}`;
  };

  // Format the date in "Nov 10, 2021" style
  let formattedDate = ath_date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Combine the formatted date and time difference
  return `${formattedDate} (${getTimeDifference(ath_date)})`;
}



export { getCoinData, getTrendingCoins, formatNumber, getDetailedCoinData, formatTimeWithDifference };
