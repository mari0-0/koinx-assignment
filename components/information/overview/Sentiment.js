"use client";

import ScrollArea from "@/components/misc/ScrollArea";
import {
  NewspaperIcon,
  LineChartIcon,
  ChevronRightIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";

export default function Sentiment() {
  return (
    <section className="w-full p-3 lg:p-6 bg-white rounded-md text-sm lg:text-[16px]">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Sentiment</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-medium">Key Events</h3>
            <img src="/info.png" alt="info" />
          </div>

          <ScrollArea>
            <div className="min-w-[400px] p-4 bg-blue-50 rounded-xl border border-gray-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <NewspaperIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-2">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                    est faucibus metus quis. Amet sapien quam viverra adipiscing
                    condimentum. Ac consectetur et pretium in a bibendum in. Sed
                    vitae sit nisi viverra natoque lacinia libero enim.
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-[400px] p-4 bg-green-50 rounded-xl border border-gray-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <LineChartIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-2">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                    est faucibus metus quis. Amet sapien quam viverra adipiscing
                    condimentum. Ac consectetur et pretium in a bibendum in. Sed
                    vitae sit nisi viverra.
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-[400px] p-4 bg-blue-50 rounded-xl border border-gray-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <NewspaperIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-2">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                    est faucibus metus quis. Amet sapien quam viverra adipiscing
                    condimentum. Ac consectetur et pretium in a bibendum in. Sed
                    vitae sit nisi viverra natoque lacinia libero enim.
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-[400px] p-4 bg-green-50 rounded-xl border border-gray-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <LineChartIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-2">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                    est faucibus metus quis. Amet sapien quam viverra adipiscing
                    condimentum. Ac consectetur et pretium in a bibendum in. Sed
                    vitae sit nisi viverra.
                  </p>
                </div>
              </div>
            </div>
            
          </ScrollArea>
        </div>

        {/* Analyst Estimates */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-medium">Analyst Estimates</h3>
            <img src="/info.png" alt="info" />
          </div>

          <div className="flex gap-8 items-center">
            <div className="w-32 h-32 rounded-full bg-bull-100 flex items-center justify-center">
              <span className="text-4xl font-semibold text-bull-200">
                76<span className="text-2xl">%</span>
              </span>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-4">
                <p className="w-8 text-sm">Buy</p>
                <div className="h-2 w-[76%] bg-bull-200 rounded" />
                <p className="w-8 text-sm">76%</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="w-8 text-sm">Hold</p>
                <div className="h-2 w-[8%] bg-gray-300 rounded" />
                <p className="w-8 text-sm">8%</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="w-8 text-sm">Sell</p>
                <div className="h-2 w-[16%] bg-bear-200 rounded" />
                <p className="w-8 text-sm">16%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollSection({ title, data }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(containerRef.current.scrollLeft + scrollAmount);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg"
          style={{ display: scrollPosition <= 0 ? "none" : "block" }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        ></div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
