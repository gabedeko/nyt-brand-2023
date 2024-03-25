import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec2 = css`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.white};
`;

export const TimeInfo1 = css`
  width: 320px;
  position: relative;

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
  z-index: 1;
`;

export const ThirtySixImg = css`
  position: absolute;
  

  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 290px;
    width: 232px;
    top: 32%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 352px;
    width: 282px;
    top: 29%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 400px;
    width: 317px;
    top: 25%;
  }
`;

export const TimeInfo2 = css`
  max-width: 400px;
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  right: -6vw;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 3;
`;
export const TimeInfo3 = css`
  max-width: 400px;
  position: absolute;
  //align-self: flex-end;
  top: 70vh;
  left: 55%;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
`;


export const TimeIntroMsg = css`
  position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
  
  
  margin: 0;
  font-family: ${fonts.cheltenham};
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 6850px;
    font-size: 39px;
    font-weight: 100;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
    left: 3250px;
    //transform: translate(-50%, calc(-50% + 5.6px));
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    // width: 7023px;
    font-size: 46px;
    font-weight: 100;
    line-height: 55px;
    letter-spacing: 0em;
    left: 4250px;
    width: 8650px;

    // font-size: 53.5px;
    // line-height: 65px;
    // width: 8000px;
    // left: 4000px;
    // font-weight: 100;
    //transform: translate(-50%, calc(-50% - 20px));
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    font-size: 53.5px;
    line-height: 65px;
    width: 8750px;
    left: 4100px;
    font-weight: 100;

    // font-size: 72px;
    // line-height: 65px;
    // width: 10400px;
    // left: 5300px;
    //transform: translate(-50%, calc(-50% + 9.5px));
  }
  z-index: 9999;
`;

export const TimeIntroWord = css`
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

export const HorizSec2Content = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  position: relative;
  left: -15vw;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -5vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: -10vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -15vw;
  }
`;

export const TimeLeftLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;
export const TimeLeftQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;
export const TimeLeftAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const TimeLeftDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  
`;


export const bold = css`
  font-weight: 700;
`;

export const WordleImg = css`
  position: absolute;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 74px;
    width: 237px;
    top: -7px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 90px;
    width: 285px;
    top: -10px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 106px;
    width: 335px;
    top: -11px;
  }
`;

export const WordleLink = css`
  display: inline;
  text-decoration: none;
  height: 0;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    padding: 0 4px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    padding: 0 4px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    padding: 0 6px;
  }
  margin: 0;
`;

export const TestDiv = css`
display: inline;
height: 0;
@media screen and (min-width: ${widths.brandSmUp}px) {
  width: 237px;
}
@media screen and (min-width: ${widths.brandMdUp}px) {
  width: 285px;
}
@media screen and (min-width: ${widths.brandLgUp}px) {
  width: 335px;
}
`;

export const WordleSpacer = css`
  
  @media screen and (min-width: ${widths.brandSmUp}px) {
    margin-left: 237px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    margin-left: 285px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    margin-left: 335px;
  }
`;

export const ThirtySixBox = css`
  position: relative;
  height: 100%;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 25%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 25%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: 25%;
  }
`;
