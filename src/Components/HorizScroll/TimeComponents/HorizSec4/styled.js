import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec4 = css`
  position: relative;
  height: 100vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    //width: 100vw;
    width: 820px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    //width: 100vw;
    width: 990px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1100px;
    //width: 100vw;
  }
`;

export const HorizSec4Content = css`
  height: 100%;
  width: 100%;
  position: relative;
  left: -12vw;
  @media (min-width: ${widths.mediumLarge}px) {
    height: 100vh;
  }

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${colors.white};
  font-family: ${fonts.franklin};
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -10vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: -10vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -10vw;
  }
`;

export const ChurchLeft = css`
  display: flex;
  flex-direction: column;
  position: relative;
  left: -15vw;
`;

export const ChurchLeftTop = css`
  position: absolute;
  max-width: 250px;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  left:-5vw;
`;

export const ChurchMid = css`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -20vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: -20vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -20vw;
  }
`;

export const ChurchMidTop = css`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  margin-left: -7vw;
`;

export const ChurchRight = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 10vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 10vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: 10vw;
  }
`;

export const ChurchLeftInfo = css`
  top: 70vh;
  position: absolute;
  width: 250px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const ChurchLeftTopInfo = css`
  //position: absolute;
  //width: 400px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;


export const ChurchLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 8px 0;
`;
export const ChurchQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: -8px 0 0 0;
`;
export const ChurchAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const ChurchDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const ChurchImg1 = css`
  position: absolute;
  
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 94px;
    width: 141px;
    top: 55vh;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 94px;
    width: 141px;
    top: 55vh;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 94px;
    width: 141px;
    top: 57vh;
  }
`;

export const ChurchImg5 = css`  
  margin-top: 16px;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 140px;
    width: 120px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 136px;
    width: 170px;

  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 136px;
    width: 170px;
  }
`;


export const ChurchImg2 = css`
  position: absolute;
  top: 35vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 260px;
    width: 389px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 316px;
    width: 472px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 372px;
    width: 556px;
  }
`;

export const ChurchImg3 = css`
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 471px;
    width: 264px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 584px;
    width: 327px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 671px;
    width: 376px;
  }
`;

export const ChurchImg4 = css`
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 151px;
    width: 221px;
    margin-right: 16px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 161px;
    width: 234px;
    margin-right: 24px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 161px;
    width: 234px;
    margin-right: 32px;
  }
`;

export const ChurchRightInfo = css`
  position: absolute;
  top: 70vh;
  margin-left: -5vw;
  width: 400px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;



export const ChurchMidInfo = css`
  width: 350px;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  z-index: 1;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

