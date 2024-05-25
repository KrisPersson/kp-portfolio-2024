export const theme = {
  breakpoint: {
    Sm: "@media (min-width: 600px)",
    LtSm: "@media (max-width: 599px)",
    Md: "@media (min-width: 900px)",
    LtMd: "@media (max-width: 899px)",
    Lg: "@media (min-width: 1200px)",
    LtLg: "@media (max-width: 1199px)",
  },
  colors: {
    black: "rgba(16, 16, 16, 1)",
    darkGrey: "rgba(92, 92, 92, 1)",
    grey: "rgba(217, 217, 217, 1)",
    primaryDarker: "rgba(29, 75, 94, 1)",
    primaryDefault: "rgba(37, 150, 186, 1)",
    secondaryDefault: "rgba(29, 31, 74, 1)",
    white: "rgba(249, 249, 249, 1)",
  },
  font: {
    family: {
      main: "'DM Sans', sans-serif",
    },
    weight: {
      regular: 400,
      medium: 500,
    },
    lineHeight: {
      main: 1.5,
      alt: 1.4,
    },
    size: {
      small: "1rem",
      regular: "1.25rem",
      large: "1.5rem",
      xlarge: "1.75rem",
      xxlarge: "2rem",
      xxxlarge: "4rem",
    },
  },
  size: {
    baseUnit: "8px",
    containerMaxWidth: "1560px",
  },
};

export type Theme = typeof theme;

export default theme;
