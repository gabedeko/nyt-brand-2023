import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec4 = css`
  position: relative;
  height: 100vh;
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
`;

export const HorizSec4Content = css`
  height: 100%;
  width: 100%;
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
  @media (min-width: ${widths.mediumLarge}px) {
    height: 100vh;
  }

  display: grid;
  grid-template-columns: 1.75fr 1fr;
  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const SurgeryLeft = css`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;
export const SurgeryRight = css`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  z-index: 1;
  position: relative;
  align-items: center;
`;

export const SurgeryLeftInfo = css`
  z-index: 1;
  top: 70vh;
  position: absolute;
  //left: 0;
  max-width: 400px;
  align-self: center;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;
export const SurgeryLeftLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 10px 0;
`;
export const SurgeryLeftQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: -8px 0 0 0;
`;
export const SurgeryLeftAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const SurgeryLeftDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const SurgeryImg1 = css`
  position: absolute;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 360px;
    top: 23%;
    @media (min-height: 900.98px) {
      top: 35%;
    }
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 380px;
    top: 20%;
    @media (min-height: 900.98px) {
      top: 35%;
    }
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 400px;
    top: 17.5%;
    @media (min-height: 900.98px) {
      top: 35%;
    }
  }
  left: 0;
`;
export const SurgeryImg2 = css`
  position: absolute;
  left: 0;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 400px;
    bottom: 21.5%;
    @media (min-height: 900.98px) {
      bottom: 30%;
    }
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 450px;
    bottom: 15%;
    @media (min-height: 900.98px) {
      bottom: 33%;
    }
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 650px;
    bottom: 8%;
    @media (min-height: 900.98px) {
      bottom: 33%;
    }
  }
`;



export const SurgeryRightInfo = css`
  z-index: 1;
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  right: -2.5vw;
  max-width: 260px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  position: absolute;
`;

export const SurgeryRightLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const SurgeryRightQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const SurgeryRightAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const SurgeryRightDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const Botox = css`
  height: 100vh;
  max-height: 1051px;
  z-index: -1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 55vh;
`;


export const FlyLeftLabel = css`
  font-family: ${fonts.karnak};
  color: rgba(0, 0, 0, 0);
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const FlyLeftQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const FlyLeftAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const FlyLeftDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const FlyImg = css`
  position: absolute;
  right: 5vw;
  bottom: 15vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 280px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 290px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 300px;
  }
`;

export const CodeRed = css`
  z-index: 2;
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  right: -40vw;
  width: 530px;
  align-self: center;
  align-self: start;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const WorldLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const WorldQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const WorldAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const WorldDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const AthleticLogo = css`
  height: 27px;
  width: 130px;
`;