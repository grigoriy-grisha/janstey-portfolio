import { ReactNode } from "react";
import classnames from "classnames";

import classes from "./Media.module.css";

interface IProps {
  desktopContent: ReactNode;
  tabletContent?: ReactNode;
  mobileContent?: ReactNode;
}

function getMobile({ desktopContent, tabletContent, mobileContent }: IProps) {
  if (mobileContent !== undefined) return mobileContent;
  if (tabletContent !== undefined) return tabletContent;
  return desktopContent;
}

function getTablet({ desktopContent, tabletContent }: IProps) {
  if (tabletContent !== undefined) return tabletContent;
  return desktopContent;
}

function Media({ desktopContent, tabletContent, mobileContent }: IProps) {
  return (
    <div>
      <div className={classnames(classes.block, classes.showMobile)}>
        {getMobile({ desktopContent, tabletContent, mobileContent })}
      </div>
      <div className={classnames(classes.block, classes.showTablet)}>
        {getTablet({ desktopContent, tabletContent })}
      </div>
      <div className={classnames(classes.block, classes.showDesktop)}>
        {desktopContent}
      </div>
    </div>
  );
}

export default Media;
