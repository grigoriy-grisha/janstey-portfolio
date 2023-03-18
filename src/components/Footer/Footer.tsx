import { Spacer } from "@/components/UI/Spacer";

import { FooterHeader } from "./FooterHeader";
import { FooterNav } from "./FooterNav";
import { CopyRightFooter } from "./CopyRightFooter";

function Footer() {
  return (
    <div>
      <FooterHeader />
      <Spacer heightDesktop="44px" heightMobile="8px" />
      <FooterNav />
      <Spacer heightDesktop="64px" />
      <CopyRightFooter />
    </div>
  );
}
export default Footer;
