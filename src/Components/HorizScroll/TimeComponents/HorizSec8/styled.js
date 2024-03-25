import { css } from 'pretty-lights';
//import { fonts, colors, widths } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec8 = css`
  height: 100vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    //width: 100vw;
    width: 820px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    //width: 100vw;
    width: 845px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1100px;
    //width: 100vw;
  }
  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const HorizSec8Content = css`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    align-items: center;
    left: 2vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    align-items: flex-start;
    left: -60vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    align-items: center;
    left: 5vw;
  }

  position: relative;
left: 45vw;
`;

export const WordleMidInfo = css`
  width: 320px;
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const WordleMidLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const WordleMidQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const WordleMidAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const WordleMidDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;
