import { memo } from "react";
import classes from "./FloatingSocialLink.module.css";
import { SocialLink } from "../../components/UI/SocialLink";
import { Media } from "@/components/UI/Media";

interface IProps {
  bottom: number | string;
}
function FloatingSocialLink({ bottom }: IProps) {
  return (
    <Media
      desktopContent={
        <div style={{ bottom }} className={classes.floating}>
          <SocialLink leftText="BEHANCE" rightText="TELEGRAM" />
        </div>
      }
      mobileContent={null}
    ></Media>
  );
}

export default memo(FloatingSocialLink);
