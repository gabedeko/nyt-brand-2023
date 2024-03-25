import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../variables';

export const GsapTest = css`
 background-color: ${colors.black};
 @media (max-width: ${widths.brandSmDown}px) {
  display: none;
}
`;

export const firstContainer = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 30vh;
@media (min-width: 767.98px) {
  @media (min-height: 1023.98px) {
    height: 0;
  }
}
background: #000;
`;

export const container = css`
  //width: 1000vw;
  width: calc(8930px + 200vw);
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-wrap: wrap;

  &.gravity-container {
    width: calc(9120px + 200vw);
  }
  &.time-container {
    width: calc(9620px + 200vw);
  }
`;

export const panelBlue = css`
width: 100vw;
height: 100vh;
background-color: blue;
`;

export const scrollDown = css`
 
`;

export const arrow = css`
 
`;

export const panelRed = css`
  width: 1020px;
  max-width: 1020px;
  height: 100vh;
  background: red;
`;

export const panelOrange = css`
  width: 1020px;
  max-width: 1020px;
  height: 100vh;
  background: orange;
`;

export const panelPurple = css`
  width: 1020px;
  max-width: 1020px;
  height: 100vh;
  background: purple;
`;

export const lastContainer = css`
display: flex;
height: 100vh;
background: yellow;
}
`;

export const Sec2 = css`
  z-index: 2;
`;

export const GravitySec2 = css`
  z-index: 2;
`;

export const GravitySec3 = css`
  z-index: 1;
`;

export const GravitySec4 = css`
  z-index: 1;
`;

export const Sec4 = css`
  z-index: 1;
`;

export const Sec5 = css`
  position: relative;
  // z-index: 1;
`;

export const GravitySec5 = css`
  position: relative;
  z-index: 1;
`;

export const GravitySec7 = css`
  z-index: 1;
`;

export const Sec10 = css`
// width: 1020px;
// max-width: 1020px;
width: auto;
  height: 100vh;
background: transparent;
z-index: -1;
`;

// export const ghost = css`
// height: 20px;
// width: 100%;
// overflow-y: scroll;
// background-color: ${colors.white};
// border: 1px solid black;
// `;

// export const ghostContent = css`
// height: 400vh;
// background-color: ${colors.white};
// `;
