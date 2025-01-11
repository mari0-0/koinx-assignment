import { ArrowRight } from "lucide-react";
import React from "react";

const GetStarted = () => {
  return (
    <section className="w-full p-8 rounded-2xl text-white bg-primary text-center flex flex-col justify-center items-center gap-8">
      <h2 className="font-bold text-3xl">Get Started with KoinX for FREE</h2>
      <p className="text-sm">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <div className="w-full flex justify-center items-center">
        <img src="/getstarted.png" alt="get started img" />
      </div>
      <button className="w-fit py-4 px-8 bg-white rounded-md text-black font-semibold flex items-center gap-2"><span>Get Started for FREE</span> <ArrowRight /></button>
    </section>
  );
};

export default GetStarted;
