import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec3 = css`
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
  position: relative;
  color: ${colors.white};
`;

export const HorizSec3Content = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  position: relative;
  
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 0;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 0;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -20vw;
  }
`;

export const SeasonBtm = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 70vh;
  margin: 0 0 0 5vw;
`;

export const SeasoningImg1 = css`
  position: static;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 265px;
    width: 320px;
    top: 30%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 357px;
    width: 431px;
    top: 20%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 477px;
    width: 581px;
    top: 5%;
  }
`;

export const SeasoningImg2 = css`
  height: auto;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    //height: 125px;
    width: 144px;
    margin-right: 24px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    //height: 125px;
    width: 198px;
    margin-right: 32px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    //height: 125px;
    width: 233px;
    margin-right: 40px;
  }
`;

export const SeasoningInfo = css`
  z-index: 1;
  align-self: flex-start;
  width: 220px;
  position: static;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    right: -25vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    right: -20vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    right: -15vw;
  }
  top: 0;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;
export const SeasoningLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const SeasoningQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;
export const SeasoningAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const SeasoningDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;
export const SeasoningConcept = css`
  font-family: ${fonts.franklin};
  font-size: 22px;
  font-weight: 300;
  line-height: 22px;
`;
