import { css } from "@emotion/core";
// import QuicksandMedium from "assets/fonts/quicksand/QuicksandMedium500.ttf";

export default css`
 
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
  }
  body {
    box-sizing: border-box;
    /* font-family: Quicksand, "Fira Sans", sans-serif; */
    font-family:  "Fira Sans", sans-serif;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
