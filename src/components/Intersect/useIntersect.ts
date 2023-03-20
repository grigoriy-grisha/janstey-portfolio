import { useEffect, useRef, useState } from "react";

type HookReturnType = [
  (instance: HTMLDivElement | null) => void,
  IntersectionObserverEntry,
  boolean
];
export const useIntersect = (oneTimes?: boolean) => {
  const isWasIntersectingRef = useRef(false);
  const [isWasIntersecting, setWasInteresting] = useState(false);
  const [entry, updateEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState(null);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new window.IntersectionObserver(([entry]) => {
      if (oneTimes && isWasIntersectingRef.current) return;
      updateEntry(entry);

      if (isWasIntersectingRef.current) return;
      isWasIntersectingRef.current = entry.isIntersecting;
      setWasInteresting(entry.isIntersecting);
    });
  }, [oneTimes]);

  useEffect(() => {
    if (oneTimes && isWasIntersecting) {
      node && observer.current?.unobserve(node);
      return;
    }

    if (node) observer.current?.observe(node);

    return () => {
      node && observer.current?.unobserve(node);
    };
  }, [node, oneTimes, isWasIntersecting]);

  return [setNode, entry || {}, isWasIntersectingRef.current] as HookReturnType;
};
