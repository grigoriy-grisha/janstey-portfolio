class Theme {
  colors = {
    white: "#ffffff",
    black: "#000000",
    gray: "#86868C",
    grayLight: "#EAEAF0",
    blueBackground: "rgb(153, 206, 255)",
    grayBackground: "rgb(237, 239, 242)",
    blackBackground: "rgb(13, 13, 16)",
    orangeBackground: "rgb(255, 103, 0)",
  } as const;

  breakpoints = {
    desktop: "1440px",
    tablet: "992px",
    mobile: "768px",
    smallMobile: "552px",
    min: "320px",
  };

  breakpointQueries = {
    desktop: `(min-width: ${this.breakpoints.tablet})`,
    tablet: `(min-width: ${this.breakpoints.mobile}) and (max-width: ${this.breakpoints.tablet})`,
    tabletAndMobile: `(min-width: ${this.breakpoints.min}) and (max-width: ${this.breakpoints.tablet})`,
    mobile: `(min-width: ${this.breakpoints.min}) and (max-width: ${this.breakpoints.mobile})`,
    smallMobile: `(min-width: ${this.breakpoints.min}) and (max-width: ${this.breakpoints.smallMobile})`,
    min: `(min-width: ${this.breakpoints.min})`,
  };
}

export const theme = new Theme();

export type ThemeColors = typeof theme.colors;
export type ThemeBreakPoints = typeof theme.breakpoints;
export type ThemeBreakPointQueries = typeof theme.breakpointQueries;

export type ThemeColorValues = ThemeColors[keyof ThemeColors];
export type ThemeBreakPointsValues = ThemeBreakPoints[keyof ThemeBreakPoints];
export type ThemeBreakPointQueriesValues =
  ThemeBreakPointQueries[keyof ThemeBreakPointQueries];
