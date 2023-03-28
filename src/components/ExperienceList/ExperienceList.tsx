import { memo } from "react";

import { Spacer } from "@/components/UI/Spacer";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Paragraph } from "@/components/Paragraph";
import { IconOne } from "@/components/UI/Icons/IconOne";
import { IconZero } from "@/components/UI/Icons/IconZero";
import { IconTwo } from "@/components/UI/Icons/IconTwo";
import { IconThree } from "@/components/UI/Icons/IconThree";
import { IconFour } from "@/components/UI/Icons/IconFour";
import { IconFigma } from "@/components/UI/Icons/IconFigma";
import { IconIllustrator } from "@/components/UI/Icons/IconIllustrator";
import { IconPhotoshop } from "@/components/UI/Icons/IconPhotoshop";
import { IconDesignSystem } from "@/components/UI/Icons/IconDesignSystem";
import { IconUi } from "@/components/UI/Icons/IconUi";
import { IconAe } from "@/components/UI/Icons/IconAe";
import { IconInfoArh } from "@/components/UI/Icons/IconInfoArh";
import { IconCompetitiveAnalysis } from "@/components/UI/Icons/IconCompetitiveAnalysis";
import { Icon3D } from "@/components/UI/Icons/Icon3D";
import { IconWireframe } from "@/components/UI/Icons/IconWireframe";
import { IconVideo } from "@/components/UI/Icons/IconVideo";
import { IconPrototype } from "@/components/UI/Icons/IconPrototype";
import { IconUserFlow } from "@/components/UI/Icons/IconUserFlow";
import { IconUserResearch } from "@/components/UI/Icons/IconUserResearch";
import { IconTelegram } from "@/components/UI/Icons/IconTelegram";
import { IconBehance } from "@/components/UI/Icons/IconBehance";
import { IconDprofile } from "@/components/UI/Icons/IconDprofile";
import { IconDribble } from "@/components/UI/Icons/IconDribble";
import { IconLinkedin } from "@/components/UI/Icons/IconLinkedin";
import { IconYoutube } from "@/components/UI/Icons/IconYoutube";
import { IconResume } from "@/components/UI/Icons/IconResume";

import classes from "./ExperienceList.module.css";
import classnames from "classnames";
import { useTranslation } from "next-i18next";

function ExperienceList() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div
        className={classnames(
          classes.experienceList,
          classes.threeColumns,
          classes.twoColumnTablet,
          classes.oneColumnMobile
        )}
      >
        <ExperienceItem
          withButton
          iconContent={<IconTelegram />}
          title="Telegram"
          link="https://t.me/mqdzn"
        />
        <ExperienceItem
          withButton
          iconContent={<IconBehance />}
          title="Behance"
          link="https://www.behance.net/mqux"
        />
        <ExperienceItem
          withButton
          iconContent={<IconDprofile />}
          title="Dprofile"
          link="https://www.dprofile.ru/janstay"
        />
        <ExperienceItem
          withButton
          iconContent={<IconDribble />}
          title="Dribble"
          link="https://www.dribbble.com/janstay"
        />
        <ExperienceItem
          withButton
          iconContent={<IconLinkedin />}
          title="Linkedin"
          link="https://www.linkedin.com/in/janstay-designer-a45259268/"
        />
        <ExperienceItem
          withButton
          iconContent={<IconYoutube />}
          title="Youtube"
          link="https://www.youtube.com/channel/UCx5MlzkGNZZWYwbPJrDZ7-Q"
        />
      </div>
      <Spacer heightDesktop="120px" />
      <Paragraph title={t("myExperienceTitle")} text={t("myExperienceText")} />
      <Spacer heightDesktop="120px" />
      <Paragraph
        title={t("designProcessTitle")}
        text={t("designProcessText")}
      />
      <Spacer heightDesktop="60px" />
      <div className={classes.experienceList}>
        <div>
          <ExperienceItem
            iconContent={<IconZero />}
            title={t("designProcessZero")}
          />
        </div>

        <div
          className={classnames(
            classes.twoColumn,
            classes.oneColumnMobileAndTablet
          )}
        >
          <ExperienceItem
            iconContent={<IconOne />}
            title={t("designProcessOne")}
          />
          <ExperienceItem
            iconContent={<IconTwo />}
            title={t("designProcessTwo")}
          />
          <ExperienceItem
            iconContent={<IconThree />}
            title={t("designProcessThree")}
          />
          <ExperienceItem
            iconContent={<IconFour />}
            title={t("designProcessFour")}
          />
        </div>
      </div>
      <Spacer heightDesktop="120px" />
      <Paragraph title={t("mySkillsTitle")} text={t("mySkillsText")} />
      <Spacer heightDesktop="60px" />
      <div className={classes.experienceList}>
        <div
          className={classnames(
            classes.threeColumns,
            classes.oneColumnMobileAndTablet
          )}
        >
          <ExperienceItem iconContent={<IconFigma />} title="Figma" />
          <ExperienceItem
            iconContent={<IconIllustrator />}
            title="Illustrator"
          />
          <ExperienceItem iconContent={<IconPhotoshop />} title="Photoshop" />
          <ExperienceItem
            iconContent={<IconDesignSystem />}
            title="Design system"
          />
          <ExperienceItem iconContent={<IconUi />} title="UI Design" />
          <ExperienceItem
            iconContent={<IconAe />}
            title="After Effect, Motion Design"
          />
        </div>

        <div
          className={classnames(
            classes.twoColumn,
            classes.oneColumnMobileAndTablet
          )}
        >
          <ExperienceItem
            iconContent={<IconInfoArh />}
            title="Information architecture"
          />
          <ExperienceItem
            iconContent={<IconCompetitiveAnalysis />}
            title="Competitive analysis"
          />
        </div>
        <div
          className={classnames(
            classes.threeColumns,
            classes.oneColumnMobileAndTablet
          )}
        >
          <ExperienceItem iconContent={<Icon3D />} title="Blender, Cinema4D" />
          <ExperienceItem iconContent={<IconWireframe />} title="Wireframes" />
          <ExperienceItem iconContent={<IconVideo />} title="Video editing" />
          <ExperienceItem iconContent={<IconPrototype />} title="Prototypes" />
          <ExperienceItem iconContent={<IconUserFlow />} title="User flow" />
          <ExperienceItem
            iconContent={<IconUserResearch />}
            title="User research"
          />
        </div>
      </div>
      <Spacer heightDesktop="120px" />
      <Paragraph title={t("myHobbiesTitle")} text={t("myHobbiesText")} />
      <Spacer heightDesktop="120px" />
      <div className={classes.experienceList}>
        <ExperienceItem
          wrapTittleInMobile
          withButton
          iconContent={<IconResume />}
          title={t("myResume")}
        />
      </div>
      <Spacer heightDesktop="240px" heightMobile="160px" />
    </div>
  );
}

export default memo(ExperienceList);
