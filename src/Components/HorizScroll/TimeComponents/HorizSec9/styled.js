import { css } from 'pretty-lights';
//import { fonts, colors, widths } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec9 = css`
  position: relative;
  height: 100vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 820px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 990px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1100px;
  }
  
  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const HorizSec9Content = css`
  height: 100%;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${widths.brandSmUp}px) {
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 5vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
  }
`;

export const TimeTop = css``;

export const TimeInfo = css`
  position: absolute;
  top: 70vh;
  
  left: 15vw;
  width: 320px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
`;

export const TimeLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const TimeQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const TimeAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const TimeDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const TimeImg = css`
  position: relative;
  transform: translateY(-50%);

  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 237px;
    width: 299px;
    top: 35%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 267px;
    width: 335px;
    top: 40%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 413px;
    width: 519px;
    top: 35%;
  }
`;
