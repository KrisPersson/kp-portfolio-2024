import { createGlobalStyle } from "styled-components";
import { Theme, theme } from "./theme";
import { size } from "./helpers";
import { H1, H2, H3, H4 } from "../components/Heading/index";
import { Subheading, Paragraph } from "../components/Paragraph/index";

export default createGlobalStyle<{ theme: Theme }>`

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: "DM Sans";
  background: ${theme.colors.secondaryDefault};
  --gutter: ${size(5)};
  --ignore-gutter: calc(var(--gutter) * -1);
  --content-max-width: ${size(70)};

  ${theme.breakpoint.LtXsm} {
    --gutter: ${size(1.5)};
  }


  ${theme.breakpoint.Lg} {
  --gutter: ${size(15)};
  };
  
}

body {
    margin: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    overflow-x: hidden;
  }

  #__next {
    display: block;
    max-height: 100vh;
    min-width: 100%;

    ${theme.breakpoint.Md} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    };
  }

  ${H1},
  ${H2},
  ${H3},
  ${H4},
  ${Subheading},
  ${Paragraph} {
    margin: 0;
    max-width: var(--content-max-width);
  }

  @font-face {
    font-family: "DM Sans";
    font-style: regular;
    font-weight: 400;
    src: local("DM Sans"), url("/fonts/DMSans_24pt-Regular.ttf") format('truetype');
  }

  @font-face {
    font-family: "DM Sans";
    font-style: medium;
    font-weight: 500;
    src: local("DM Sans"), url("/fonts/DMSans_24pt-Medium.ttf") format('truetype');
  }

  @keyframes reveal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide {
    from {
      opacity: 0;
      transform: translateX(10vw);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes card {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      z-index: -1;
      visibility: hidden;
    }
  }

  @keyframes button {
    from {
      opacity: 1;
    } to {
      opacity: 0.7;
    }
  }

  .slide {
    animation: slide linear forwards;
    animation-timeline: view();
    animation-range: 0vh 40vh;
  }

  .reveal {
    animation: reveal linear forwards;
    animation-timeline: view();
    animation-range: 0vh 40vh;
  }



`;
