import Link from "next/link";

export default function AboutBitcoin() {
  return (
    <section className="w-full p-3 lg:p-6 bg-white rounded-md text-sm lg:text-[16px]">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">About Bitcoin</h1>

        <div className="pb-6 space-y-6 border-b-2 border-b-neutral-300">
          <h2 className="text-xl font-bold">What is Bitcoin?</h2>
          <p className="text-gray-700">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="pb-6 space-y-4 border-b-2 border-b-neutral-300">
          <h2 className="text-xl font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </p>

          <p className="text-gray-700">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>

          <p className="text-gray-700">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-6 ">
        <h2 className="text-2xl font-bold">Already Holding Bitcoin?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div className="relative h-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-white p-3 flex gap-4 items-center">
              <div className="w-28 h-28">
                <img
                  src="/about-btc-1.jpg"
                  alt="Laptop with spreadsheet"
                  className="w-full h-full object-cover object-right-bottom rounded-lg"
                />
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-semibold">
                  Calculate your Profits
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Check Now →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div className="relative h-full bg-gradient-to-r from-orange-400 to-red-400 text-white p-3 flex gap-4 items-center">
              <div className="w-28 h-28">
                <img
                  src="/about-btc-2.jpg"
                  alt="Laptop with spreadsheet"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-semibold">
                  Calculate your tax liability
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Check Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
