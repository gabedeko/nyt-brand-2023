import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec7 = css`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
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

export const HorizSec7Content = css`
  height: 100%;
  position: relative;
  
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -20vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: -32vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -20vw;
  }
`;

export const StockImg1 = css`
  position: absolute;
  left: 10vw;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 145px;
    top: 25%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 155px;
    top: 25%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 170px;
    top: 25%;
  }
`;

export const StockImg2 = css`
  position: absolute;
  left: -5vw;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 145px;
    top: 56%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 155px;
    top: 56%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 170px;
    top: 56%;
  }
`;

export const StockInfo1 = css`
  z-index: 1;
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  width: 310px;
  margin-left: -5vw;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const StockInfo2 = css`
  z-index: 1;
  position: absolute;
  top: 72.5vh;
  width: 360px;
  margin-left: 15vw;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const StockLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const StockQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const StockAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const StockDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;
