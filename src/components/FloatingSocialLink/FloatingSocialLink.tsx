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
          <SocialLink
            leftHref="https://www.behance.net/mqux"
            leftText="BEHANCE"
            rightHref="https://t.me/mqdzn"
            rightText="TELEGRAM"
          />
        </div>
      }
      mobileContent={null}
    />
  );
}

export default memo(FloatingSocialLink);
