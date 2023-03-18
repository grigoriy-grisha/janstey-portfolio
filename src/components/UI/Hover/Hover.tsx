import { ReactNode, useState } from "react";

interface IProps {
  children: (isHover: boolean) => ReactNode;
}
const Hover = ({ children }: IProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children(isHover)}
    </div>
  );
};

export default Hover;
