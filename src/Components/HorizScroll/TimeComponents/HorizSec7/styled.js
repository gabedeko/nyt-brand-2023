import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec7 = css`
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
  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const HorizSec7Content = css`
  position: relative;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 5vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 5vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: 5vw;
  }
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const QuarterTop = css`
  display: flex;
  position: relative;
  align-items: cener;
`;
export const QuarterBtm = css`
  display: flex;
  postion: absolute;
`;


export const QuarterInfo = css`
  position: absolute;
  top: 70vh;
  margin-left: 10vw;
  width: 400px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const QuarterLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const QuarterQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const QuarterAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const QuarterDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const QuarterImg1 = css`
  position: relative;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 464px;
    width: auto;
    top: 6vh;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 484px;
    width: auto;
    top: 5vh;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 414px;
    width: auto;
    top: 5vh;
  }

  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
`;

export const QuarterImg2 = css`

  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 280px;
    width: auto;
    margin-left: 45vw;
    margin-top: 0vh;

    @media (min-height: 1023.98px) {
      margin-left: 55vw;
      margin-top: 15vh;
    }
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 300px;
    width: auto;
    margin-left: 40vw;
    margin-top: -5vh;
    @media (min-height: 1023.98px) {
      margin-left: 55vw;
      margin-top: 25vh;
    }
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 320px;
    width: auto;
    margin-left: 30vw;
    margin-top: -5vh;
    @media (min-height: 1023.98px) {
      margin-left: 55vw;
      margin-top: 30vh;
    }
  }
`;