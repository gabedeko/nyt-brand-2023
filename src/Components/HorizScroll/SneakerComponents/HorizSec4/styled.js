import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';
import KareemHook from '../../../../assets/kareem_hook.png';

export const HorizSec4 = css`
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

  // &.show1 {
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
  // }
  // &.show2 {
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
  // }
  // &.show3 {
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
  // }
`;

export const HorizSec4Content = css`
  height: 100%;
  width: 100%;

  @media (min-width: ${widths.mediumLarge}px) {
    height: 100vh;
  }

  display: grid;
  grid-template-columns: 1.75fr 1fr;
  color: ${colors.white};
  font-family: ${fonts.franklin};
`;

export const SkyLeft = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const SkyRight = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  position: relative;
`;

export const SkyLeftInfo = css`
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  position: absolute;
  max-width: 508px;
  margin-left: -200px;
  align-self: center;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;
export const SkyLeftLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;
export const SkyLeftQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: -8px 0 0 0;
`;
export const SkyLeftAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const SkyLeftDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const SkyImg1 = css`
  position: absolute;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 319px;
    height: 320px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 359px;
    height: 360px;
  }
  top: 42%;
  left: 30%;
  transform: translate(-50%, -50%);
  margin: 0;
  background-image: url(${KareemHook});
  background-size: cover;
  background-position: %50 %50;
  background-repeat: no-repeat;
`;

export const SkyLeftMsg = css`
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
    width: 950px;
  }
  z-index: 1;
`;

export const SkyLeftWord = css`
  font-weight: 500;
`;

export const SkyImg2 = css`
  position: absolute;
  bottom: 10vh;
  left: -4vw;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 270px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 280px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 320px;
  }
`;

export const SkyRightInfo = css`
  position: absolute;
  top: 70vh;
  left: 20vw;
  width: 313px;
  align-self: center;
  width: 400px;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  position: absolute;
  top: 70vh;
  z-index: 2;
`;

export const SkyRightLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;

export const SkyRightQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const SkyRightAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const SkyRightDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const ChangingWorld = css`
  height: 100vh;
  max-height: 1051px;
  z-index: -1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 55vh;
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
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  right: 5vw;
`;

export const FlyLeftLabel = css`
  font-family: ${fonts.karnak};
  color: rgba(0, 0, 0, 0);
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
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

export const WorldInfo = css`
  z-index: 2;
  position: absolute;
  top: 70vh;
  right: -40vw;
  width: 530px;
  margin: 40px 0 0 40px;
  align-self: center;
  align-self: start;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
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
  margin: 0;
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
  margin: 0 0 4px 0;
`;