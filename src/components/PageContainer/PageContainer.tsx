import { ReactNode } from "react";
import classes from "./PageContainer.module.css";
interface IProps {
  children: ReactNode;
}

function PageContainer({ children }: IProps) {
  return <div className={classes.mainContainer}>{children}</div>;
}
export default PageContainer;
