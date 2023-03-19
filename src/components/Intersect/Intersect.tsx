import { ReactNode } from "react";

import { useIntersect } from "./useIntersect";

interface IProps {
  oneTimes?: boolean;
  children: (
    entry: IntersectionObserverEntry,
    isWasInteresting: boolean
  ) => ReactNode;
}

function Intersect({ children, oneTimes }: IProps) {
  const [setNode, entry, isWasInteresting] = useIntersect(oneTimes);

  return <div ref={setNode}>{children(entry, isWasInteresting)}</div>;
}

export default Intersect;
