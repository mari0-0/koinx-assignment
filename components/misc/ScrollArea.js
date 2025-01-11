"use client"

const { ChevronLeft, ChevronRight } = require("lucide-react");
const { useState, useRef } = require("react");

function ScrollArea({ title, children }) {
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
        >
          {children}
        </div>
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

export default ScrollArea;