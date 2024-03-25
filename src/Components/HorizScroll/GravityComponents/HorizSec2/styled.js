import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';
import brandLpSec2Bg from '../../../../assets/AirJordan1OGBred1985_ChrisKarges1000px.svg';

export const HorizSec2 = css`
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
  // background-image: url(${brandLpSec2Bg});
  // background-size: 1007px;
  // background-position: 50% 35%;
  // background-repeat: no-repeat;
  
  color: ${colors.white};
`;

export const HorizSec2Content = css`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 0vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 0vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -1vw;
  }
`;

export const GravityInfo1 = css`
  opacity: 0;
  align-self: center;
  max-width: 400px;
  margin: 0;
  left: 0;
  position: absolute;
  top: 70vh;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;

  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      left: 20vw;
    }
  }
`;

export const GravityInfo2 = css`
  opacity: 0;
  align-self: center;
  max-width: 350px;
  margin: 0;
  
  @media screen and (min-width: ${widths.brandSmUp}px) {
    right: 5vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    right: 5vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    right: 13vw;
  }
  position: absolute;
  top: 70vh;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
`;

export const GravityIntroMsg = css`
  position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
  margin: 0;
  font-family: ${fonts.cheltenham};
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 6600px;
    font-size: 39px;
    font-weight: 100;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
    left: 3200px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    // width: 7023px;
    font-size: 46px;
    font-weight: 100;
    line-height: 55px;
    letter-spacing: 0em;
    left: 4100px;
    width: 8600px;

    // font-size: 53.5px;
    // line-height: 65px;
    // width: 8000px;
    // left: 4000px;
    // font-weight: 100;

  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    font-size: 53.5px;
    line-height: 65px;
    width: 8600px;
    left: 4000px;
    font-weight: 100;

    // font-size: 72px;
    // line-height: 65px;
    // width: 10400px;
    // left: 5300px;
  }
  z-index: 9999;
`;

export const GravityIntroWord = css`
  font-weight: 700;
  display: inline;
  text-decoration: none;
  color: ${colors.white};
  padding-bottom: 5px;
  border-bottom: 1.5px solid rgba(255,255,255,0);
  transition: border .3s ease-in-out;
  &:hover {
    border-bottom: 1.5px solid rgba(255,255,255,1);
    transition: border .3s ease-in-out;
  }
`;

export const GravityLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;
export const GravityHeadline = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;
export const GravityAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const GravityDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  
`;
export const GravityConcept = css`
  font-family: ${fonts.franklin};
  font-size: 22px;
  font-weight: 300;
  line-height: 22px;
`;

export const GravityImg = css`
  position: absolute;
  transform: translate(-50%, -50%);

  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 388px;
    top: 50%;
    left: 35vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 471px;
    top: 47.5%;
    left: 35vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 554px;
    top: 45%;
    left: 25vw;
  }
`;

export const bold = css`
  font-weight: 700;
`;