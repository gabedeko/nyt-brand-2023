import { css } from 'pretty-lights';
//import { fonts, colors, widths } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec8 = css`
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
  position: relative;
`;

export const HorizSec8Content = css`
  height: 100%;
  position: relative;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -10vw;
    width: 100%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: -10vw;
    width: 85%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: 0vw;
    width: 80%;
  }
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const SkiInfo = css`
  width: 320px;
  max-width: 320px;
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  right: -10vw;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const SkiLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;

export const SkiQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const SkiAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const SkiDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const SkiImg = css`
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 273px;
    width: 402px;   
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 367px;
    width: 540px; 
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 387px;
    width: 560px;  
  }
`;