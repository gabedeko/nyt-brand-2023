import { css } from 'pretty-lights';
//import { fonts, colors, widths } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec3 = css`
  height: 100vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 800px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 950px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1150px;
  }
  position: relative;
  color: ${colors.white};
`;

export const HorizSec3Content = css`
  height: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 0vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 0vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: 0vw;
  }

  @media (min-width: ${widths.mediumLarge}px) {
    height: 100vh;
  }

  display: grid;
  grid-template-columns: 1.75fr 1fr;
  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const SkinLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 10vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 10vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: 11vw;
  }
`;
export const SkinRight = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;
  position: relative;
  
  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -5vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: -5vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -5vw;
  }
`;

export const SkinImg1 = css`
  position: absolute;
  
  
  @media screen and (min-width: ${widths.brandSmUp}px) {
    top: 30%;
    height: 293px;
    @media (min-height: 900.98px) {
      top: 36%;
    }
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    top: 23%;
    height: 356px;
    @media (min-height: 900.98px) {
      top: 36%;
    }
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    top: 15%;
    height: 410px;
  }
`;

export const SkinImg2 = css`
  
  position: absolute;
  bottom: 20%;
  left: 0;
  right: 0;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 81px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 97.75px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 115px;
  }

  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      bottom: 35%;
    }
  }
`;

export const SkinInfo1 = css`
  z-index: 1;
  align-self: end;
  max-width: 400px;
  top: 70vh;
  left: 0;
  position: absolute;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;
export const SkinInfo2 = css`
  z-index: 1;
  align-self: end;
  max-width: 400px;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  left: 0;
  position: absolute;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      left: -15vw;
    }
  }
`;

export const SkinLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const SkinQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;
export const SkinAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const SkinDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;
export const SkinConcept = css`
  font-family: ${fonts.franklin};
  font-size: 22px;
  font-weight: 300;
  line-height: 22px;
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
    left: 2600px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    // width: 7023px;
    font-size: 46px;
    font-weight: 100;
    line-height: 55px;
    letter-spacing: 0em;
    left: 3150px;
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
    left: 2900px;
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

export const bold = css`
  font-weight: 700;
`;