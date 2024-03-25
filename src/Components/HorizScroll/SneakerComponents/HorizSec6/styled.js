import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec6 = css`
  position: relative;
  height: 100vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    //width: 100vw;
    width: 722px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    //width: 100vw;
    width: 866px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1020px;
    //width: 100vw;
  }

  // .info {
  //   h5 {
  //     color: rgba(255,255,255,0);
  //     transition: color .3s ease-in-out 1.4s;
  //   }
  //   h3 {
  //     color: rgba(255,255,255,0);
  //     transition: color .3s ease-in-out 1.0s;
  //   }
  //   p {
  //     color: rgba(255,255,255,0);
  //     transition: color .3s ease-in-out .6s;
  //   }
  // }

  // &.show {
  //   .info {
  //     h5 {
  //       color: ${colors.white};
  //       transition: color .3s ease-in-out .6s;
  //     }
  //     h3 {
  //       color: ${colors.white};
  //       transition: color .3s ease-in-out 1.0s;
  //     }
  //     p {
  //       color: ${colors.white};
  //       transition: color .3s ease-in-out 1.4s;
  //     }
  //   }
  }
`;

export const HorizSec6Content = css`
  height: 100vh;
  // min-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1.8fr;

  // @media (min-width: ${widths.mediumLarge}px) {
  //   height: 100vh;
  // }

  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const FlyLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const FlyLeftInfo = css`
  width: 400px;
  align-self: end;
  max-width: 400px;
  margin-right: -100px;
  z-index: 1;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
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

export const FlyLeftBtm = css`
  align-self: center;
  margin-top: 35vh;
`;

export const FlyLeftMsg = css`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: ${fonts.cheltenham};
  font-weight: 200;
  @media screen and (min-width: ${widths.brandSmDown}px) {
    font-size: 38.5px;
    line-height: 45.5px;
  }
  @media screen and (min-width: ${widths.brandMdDown}px) {
    font-size: 46px;
    line-height: 55px;
  }
  @media screen and (min-width: ${widths.brandLgDown}px) {
    font-size: 55px;
    line-height: 65px;
  }
`;

export const FlyRight = css`
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (min-width: ${widths.brandSmDown}px) {
    margin-left: -18vw;
  }
  @media screen and (min-width: ${widths.brandMdDown}px) {
    margin-left: -20vw;
  }
  @media screen and (min-width: ${widths.brandLgDown}px) {
    margin-left: -23vw;
  }
`;

export const FlyRightInfo = css`
  width: 360px;
  align-self: center;
  max-width: 532px;
  position: absolute;
  top: 70vh;
  margin-right: -80px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const FlyRightLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;

export const FlyRightQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const FlyRightAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const FlyRightDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const FlyRightMsg = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: ${fonts.cheltenham};
  font-weight: 200;
  @media screen and (min-width: ${widths.brandSmDown}px) {
    font-size: 38.5px;
    line-height: 45.5px;
  }
  @media screen and (min-width: ${widths.brandMdDown}px) {
    font-size: 46px;
    line-height: 55px;
  }
  @media screen and (min-width: ${widths.brandLgDown}px) {
    font-size: 55px;
    line-height: 65px;
  }
`;

export const FlyRightWord = css`
  font-weight: 500;
`;

export const SkullImg = css`
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 460px;
    width: auto;
    margin-top: -10vh;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 480px;
    width: auto;
    margin-top: -15vh;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 520px;
    width: auto;
    margin-top: -25vh;
  }
`;


export const WellnessLeftInfo = css`
  width: 532px;
  align-self: center;
  max-width: 532px;
  align-self: start;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const WellnessLeftLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;

export const WellnessLeftQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const WellnessLeftAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const WellnessLeftDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;