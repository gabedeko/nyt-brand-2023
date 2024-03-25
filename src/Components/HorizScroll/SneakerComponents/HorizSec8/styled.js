import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';
import GumStreetGif from '../../../../assets/12_NFA_LP_Video_Street.gif';

export const HorizSec8 = css`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${colors.white};
  font-family: ${fonts.franklin};
  position: relative;

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

export const StreetMid = css`
  background-image: url(${GumStreetGif});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
 
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 577px;
    width: 658px;
    margin-left: -20vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 701px;
    width: 799px;
    margin-left: -22vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 825px;
    width: 941px;
    margin-left: -25vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

export const StreetMidMsg = css`
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
    width: 1200px;
  }
  margin-left: -250px;
`;

export const StreetMidWord = css`
  font-weight: 500;
`;

export const StreetMidInfo = css`
  width: 320px;
  align-self: center;
  max-width: 320px;
  position: absolute;
  top: 70vh;
  right: 25vw;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const StreetMidLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;

export const StreetMidQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const StreetMidAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const StreetMidDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;
