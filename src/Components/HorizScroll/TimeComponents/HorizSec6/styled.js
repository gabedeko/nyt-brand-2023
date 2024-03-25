import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec6 = css`
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
export const HorizSec6Content = css`
  height: 100vh;
  // min-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 120px;
  position: relative;
  // @media (min-width: ${widths.mediumLarge}px) {
  //   height: 100vh;
  // }

  color: ${colors.white};
  font-family: ${fonts.franklin};

  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -2vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 2vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: 0vw;
  }
`;

export const SymmetryLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SymmetryLeftInfo = css`
  width: 400px;
  max-width: 400px;
  z-index: 1;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const SymmetryBtm = css`
  position: absolute;
  top: 70vh;
  display: flex;
  flex-direction: row;
`;


export const SymmetryRight = css`
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (min-width: ${widths.brandSmDown}px) {
  }
  @media screen and (min-width: ${widths.brandMdDown}px) {
  }
  @media screen and (min-width: ${widths.brandLgDown}px) {
  }
`;

export const SymmetryRightInfo = css`
  width: 300px;
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

export const SymmetryLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const SymmetryQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const SymmetryAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const SymmetryDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const SymmetryImg1 = css`
  margin-top: -5vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 201px;
    width: 355px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 243px;
    width: 431px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 285px;
    width: 507px;
  }
`;

export const SymmetryImg2 = css`
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 406px;
    width: 323px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 493px;
    width: 392px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 581px;
    width: 462px;
  }
`;

export const SymmetryImg3 = css`
  margin-right: 32px;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 119px;
    width: 94px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 119px;
    width: 94px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 141px;
    width: 111px;
  }
`;