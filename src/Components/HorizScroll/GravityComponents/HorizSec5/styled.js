import { css } from 'pretty-lights';
//import { fonts, colors, widths } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec5 = css`
  position: relative;
  height: 100vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 800px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
      width: 950px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1100px;
  }
`;
export const HorizSec5Content = css`
  height: 100vh;
  // min-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  grid-gap: 80px;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 35vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 15vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    
  }

  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const ConspiracyLeft = css`
  display: flex;
  flex-direction: column;
`;

export const ConspiracyMid = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ConspiracyRight = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ConspiracyImg = css`
  position: relative;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 323px;
    height: 214.9px;
    top: 6%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 392px;
    height: 260.95px;
    top: 6%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 461px;
    height: 307px;
    top: 6%;
  }
`;

export const ConspiracyImg2 = css`
  position: relative;
  width: auto;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    //width: 272.3px;
    height: 307px;
    top: 56%;
    @media (min-height: 900.98px) {
      top: 66%;
    }
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    //width: 330px;
    height: 270px;
    top: 60%;
    @media (min-height: 900.98px) {
      top: 66%;
    }
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    //width: 389px;
    height: 223px;
    top: 64%;
    @media (min-height: 900.98px) {
      top: 66%;
    }
  }
`;

export const ConspiracyImg3 = css`
  position: relative;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 208px;
    height: 108px;
    top: 19%;
    @media (min-height: 900.98px) {
      top: 16%;
    }
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 228px;
    height: 128px;
    top: 23%;
    @media (min-height: 900.98px) {
      top: 16%;
    }
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 258px;
    height: 158px;
    top: 24%;
    @media (min-height: 900.98px) {
      top: 16%;
    }
  }
`;

export const ConspiracyLeftInfo = css`
  align-self: center;
  max-width: 290px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
  position: absolute;
  top: 70vh; 
`;

export const ConspiracyMidInfo = css`
  top: 5vh;
  width: 320px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
  position: absolute;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
`;

export const ConspiracyRightInfo = css`
  top: 70vh;
  width: 290px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
  position: absolute;
  top: 70vh; 
`;

export const ConspiracyLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const ConspiracyQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const ConspiracyAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const ConspiracyDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;
