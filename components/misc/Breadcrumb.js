import { ChevronsRight } from "lucide-react";
import React from "react";

const Breadcrumb = ({coinName}) => {
  return (
    <div className="py-6 w-full bg-background flex items-center gap-2">
      <a className="text-neutral-600 cursor-pointer hover:underline">Cryptocurrencies</a>
      <p className="text-neutral-500">
        <ChevronsRight />
      </p>
      <a className="font-semibold cursor-pointer hover:underline">{coinName}</a>
    </div>
  );
};

export default Breadcrumb;
