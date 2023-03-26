import { ReactNode } from "react";
import { copyToClickBoard } from "@/utils/copyToClickBoard";

interface IProps {
  onCopy: () => void;
  children: ReactNode;
  copyText: string;
}

function CopyToClickBoard({ children, copyText, onCopy }: IProps) {
  return (
    <div
      onClick={() => {
        copyToClickBoard(copyText);
        onCopy();
      }}
    >
      {children}
    </div>
  );
}

export default CopyToClickBoard;
