import { useEffect, useState } from "react";
import { ThemeBreakPointQueriesValues } from "@/utils/theme";

function useMediaQuery(query: ThemeBreakPointQueriesValues): boolean {
  const getMatches = (query: ThemeBreakPointQueriesValues): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
