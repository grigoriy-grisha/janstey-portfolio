import { useRouter } from "next/router";

function useChangeToLocate() {
  const router = useRouter();
  return {
    changeTo: router.locale === "en" ? "ru" : "en",
    currentRoute: router.route,
  };
}

export default useChangeToLocate;
