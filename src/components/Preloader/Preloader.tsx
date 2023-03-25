import { useEffect, useState } from "react";
import classnames from "classnames";

import { IconAva } from "@/components/UI/Icons/IconAva";

import classes from "./Preloader.module.css";

function Preloader() {
  const [isInactive, setIsInactive] = useState(false);
  const [isLoadProgress, setLoadProgress] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const idTimeoutProgress = setTimeout(() => setLoadProgress(true), 500);
    const idTimeoutInactive = setTimeout(() => {
      setIsInactive(true);
      document.body.style.overflow = "auto";
    }, 1000);

    return () => {
      clearTimeout(idTimeoutProgress);
      clearTimeout(idTimeoutInactive);
    };
  }, []);

  return (
    <div
      className={classnames(classes.preloader, {
        [classes.inactive]: isInactive,
      })}
    >
      <div className={classes.loaderContainer}>
        <div className={classes.avaContainer}>
          <IconAva />
        </div>
        <div className={classes.progressContainer}>
          <div
            className={classnames(classes.loader, {
              [classes.progressLoader]: isLoadProgress,
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
