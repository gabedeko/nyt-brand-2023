import { css } from 'pretty-lights';
//import { fonts, colors, widths } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec9 = css`
  position: relative;
  height: 100vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    //width: 100vw;
    width: 800px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    //width: 100vw;
    width: 950px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1100px;
  }
  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const HorizSec9Content = css`
  height: 100%;
  position: relative;
  
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -25vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: -25vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -25vw;
  }
`;

export const JumpInfo = css`
  position: absolute;
  top: 70vh;
  width: 320px;
  max-width: 320px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
`;

export const JumpLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const JumpQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const JumpAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const JumpDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const JumpImg = css`
  position: relative;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 152px;
    width: 271px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 185px;
    width: 329px; 
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 185px;
    width: 329px;
  }
`;
