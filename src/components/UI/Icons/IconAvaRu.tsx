type S = "l" | "m" | "s";

function getPath(size: S) {
  if (size === "l") {
    return (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.5212 100.365V126.737H58.314H51.3042V133.849V140.961V155.184H65.5212V140.961H98.793H146.479V155.184H160.696V140.961V126.737H146.479V100.266V59.572H113.109H79.7382V73.7953H65.5212V100.365ZM132.262 126.737V100.266V73.7953H110.787H87.5752L79.7382 81.6357V89.4762V105.157V126.737H105.901H132.262Z"
        fill="black"
      />
    );
  }

  if (size === "m") {
    return (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.9419 59.651V75.3251H34.6584H30.4922V79.5518V83.7786V92.232H38.9419V83.7786H58.7166H87.0585V92.232H95.5082V83.7786V75.3251H87.0585V59.5923V35.406H67.2251H47.3917V43.8595H38.9419V59.651ZM78.6087 75.3251V59.5923V43.8595H65.8452H52.0495L47.3917 48.5193V53.1792V62.499V75.3251H62.9415H78.6087Z"
        fill="black"
      />
    );
  }

  return (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1261 17.0431V21.5214H9.90225H8.71191V22.7291V23.9367V26.352H11.1261V23.9367H16.776H24.8737V26.352H27.2879V23.9367V21.5214H24.8737V17.0263V10.116H19.207H13.5403V12.5312H11.1261V17.0431ZM22.4595 21.5214V17.0263V12.5312H18.8128H14.8711L13.5403 13.8626V15.194V17.8568V21.5214H17.9831H22.4595Z"
      fill="black"
    />
  );
}
export function IconAvaRu({ sizeValue = "s" }: { sizeValue?: S }) {
  const size = sizeValue === "l" ? 212 : sizeValue === "m" ? 126 : 36;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <g clipPath="url(#clip0_1028_2937)">
        <rect width={size} height={size} rx={size / 2} fill="#D9D9D9" />
        <rect width={size} height={size} rx={size / 2} fill="#99CEFF" />
        {getPath(sizeValue)}
      </g>
      <defs>
        <clipPath id="clip0_1028_2937">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
