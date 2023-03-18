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
import useMediaQuery from "@/hooks/useMedia";
import { theme } from "@/utils/theme";

import classes from "./ExperienceList.module.css";
import classnames from "classnames";

function ExperienceList() {
  const isTablet = useMediaQuery(theme.breakpointQueries.tablet);
  const isMobile = useMediaQuery(theme.breakpointQueries.mobile);

  return (
    <div>
      <div
        className={classnames(classes.experienceList, classes.threeColumns, {
          [classes.twoColumn]: isTablet,
          [classes.oneColumn]: isMobile,
        })}
      >
        <ExperienceItem
          withButton
          iconContent={<IconTelegram />}
          title="Telegram"
        />
        <ExperienceItem
          withButton
          iconContent={<IconBehance />}
          title="Behance"
        />
        <ExperienceItem
          withButton
          iconContent={<IconDprofile />}
          title="Dprofile"
        />
        <ExperienceItem
          withButton
          iconContent={<IconDribble />}
          title="Dribble"
        />
        <ExperienceItem
          withButton
          iconContent={<IconLinkedin />}
          title="Linkedin"
        />
        <ExperienceItem
          withButton
          iconContent={<IconYoutube />}
          title="Youtube"
        />
      </div>
      <Spacer heightDesktop="120px" />
      <Paragraph
        title="My experience"
        text="I'm only 19 years old, but I already have more than 3 years of experience in design.
All this time I've been working as a freelancer, looking for clients on many sites and encountering different areas in design, and the clients themselves were people from different countries (Europe/CIS)"
      />
      <Spacer heightDesktop="120px" />
      <Paragraph
        title="Design process"
        text="Every project has a different path to achieve its goals, but it usually looks like this"
      />
      <Spacer heightDesktop="60px" />
      <div className={classes.experienceList}>
        <div>
          <ExperienceItem iconContent={<IconZero />} title="Task statement" />
        </div>

        <div
          className={classnames(classes.twoColumn, {
            [classes.oneColumn]: isTablet || isMobile,
          })}
        >
          <ExperienceItem
            iconContent={<IconOne />}
            title="Determining time and cost"
          />
          <ExperienceItem iconContent={<IconTwo />} title="Work process" />
          <ExperienceItem
            iconContent={<IconThree />}
            title="Presentation of the result"
          />
          <ExperienceItem iconContent={<IconFour />} title="File Transfer" />
        </div>
      </div>
      <Spacer heightDesktop="120px" />
      <Paragraph
        title="My skills"
        text="Let me tell you what I work with and in what programs"
      />
      <Spacer heightDesktop="60px" />
      <div className={classes.experienceList}>
        <div
          className={classnames(classes.threeColumns, {
            [classes.oneColumn]: isTablet || isMobile,
          })}
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
          className={classnames(classes.twoColumn, {
            [classes.oneColumn]: isTablet || isMobile,
          })}
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
          className={classnames(classes.threeColumns, {
            [classes.oneColumn]: isTablet || isMobile,
          })}
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
      <Paragraph
        title="My hobbies"
        text="In my free time I like listening to music, play guitar, even composed a few songs myself, started drawing, not very professional yet, but everything is ahead. During the breaks I watch soap operas and movies."
      />
      <Spacer heightDesktop="120px" />
      <div className={classes.experienceList}>
        <ExperienceItem
          withButton
          iconContent={<IconResume />}
          title="My resume"
        />
      </div>
      <Spacer heightDesktop="240px" heightMobile="160px" />
    </div>
  );
}

export default memo(ExperienceList);
