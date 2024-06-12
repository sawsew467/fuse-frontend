import * as React from "react";

import SearchIcon from "@public/svgr/SearchIcon";
import { Input } from "./input";

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, type, placeholder, ...props }, ref) => {
    return (
      <div
        className="flex h-fit w-full max-w-lg items-center space-x-2 rounded-full border-2 border-status-offline bg-white px-3 py-3"
        ref={ref}
        {...props}
      >
        <SearchIcon />
        <Input
          type="search"
          placeholder={placeholder}
          className="h-fit w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-white text-base py-0 px-0"
        />
      </div>
    );
  },
);
Search.displayName = "Search";

export { Search };

