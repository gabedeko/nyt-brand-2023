import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec7 = css`
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
  color: ${colors.white};
  font-family: ${fonts.franklin};

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
  // }
`;

export const HorizSec7Content = css`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1.2fr 2fr 1fr;
`;

export const GumLeft = css`
  display: flex;
  position: relative;
  align-items: cener;
`;

export const GumLeftInfo = css`
  position: absolute;
  width: 360px;
  align-self: center;
  max-width: 360px;
  bottom: 12vh;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const GumLeftLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;

export const GumLeftQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const GumLeftAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const GumLeftDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const GumMid = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-left: -54vw;
`;

export const GumMidImg = css`
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 617px;
  height: 727px;
`;

export const GumMidMsg = css`
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
    width: 720px;
  }
`;

export const GumMidWord = css`
  font-weight: 500;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 420px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 514px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 605px;
  }
`;

export const GumRight = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GumRightInfo = css`
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  margin: 0 -40px 0 0;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  @media screen and (min-width: 1400px) {
    margin: 0px -2vw 0px 0px;
    width: 250px;
  }
  
`;

export const GumRightLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;

export const GumRightQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const GumRightAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const GumRightDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;

export const ChewingGunImg = css`
  
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 464px;
    width: auto;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 484px;
    width: auto;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 414px;
    width: auto;
  }
`;