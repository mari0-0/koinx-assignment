"use client";

import React, { useState } from "react";
import Overview from "./overview/Overview";

const tabs = [
  "Overview",
  "Fundamentals",
  "New Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const Tabs = ({coinData}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div>
      <div className="w-full my-8 flex gap-12 border-b-2 border-b-neutral-300 overflow-x-auto overflow-y-hidden">
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </div>
      <div className="w-full">
        {activeTab === "Overview" ? (
          <Overview coinData={coinData}/>
        ) : (
          <section className="w-full p-3 lg:p-6 bg-white rounded-md">
            <h2 className="text-3xl font-semibold">{activeTab}</h2>
          </section>
        )}
      </div>
    </div>
  );
};

export default Tabs;

export const Tab = ({ isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`h-full py-2 ${
        isActive
          ? "text-primary font-semibold border-b-[3px] border-b-primary translate-y-[2px]"
          : ""
      }`}
    >
      {children}
    </button>
  );
};
