import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

import brandLpSec2Bg from '../../../../assets/AirJordan1OGBred1985_ChrisKarges1000px.svg';

export const HorizSec2 = css`
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
  // background-image: url(${brandLpSec2Bg});
  // background-size: 1007px;
  // background-position: 50% 35%;
  // background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.white};

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

export const SneakersInfo = css`
  opacity: 0;
  align-self: center;
  max-width: 400px;
  margin: 0 0 0 420px;
  position: absolute;
  top: 70vh;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
`;

export const SneakersIntroMsg = css`
  position: absolute;
  top: 50%;

  transform: translate(-50%, -50%);
  margin: 0;
  font-family: ${fonts.cheltenham};
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 6000px;
    font-size: 39px;
    font-weight: 100;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: left;
    left: 3000px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    // width: 7023px;
    font-size: 46px;
    font-weight: 100;
    line-height: 55px;
    letter-spacing: 0em;
    left: 4200px;
    width: 8000px;

    // font-size: 53.5px;
    // line-height: 65px;
    // width: 8000px;
    // left: 4000px;
    // font-weight: 100;

  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    font-size: 53.5px;
    line-height: 65px;
    width: 8000px;
    left: 4000px;
    font-weight: 100;

    // font-size: 72px;
    // line-height: 65px;
    // width: 10400px;
    // left: 5300px;
  }
  z-index: 9999;
`;

export const SneakersIntroWord = css`
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

export const SneakersLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;
export const SneakerHeadline = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;
export const SneakersAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const SneakersDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  
`;
export const SneakersConcept = css`
  font-family: ${fonts.franklin};
  font-size: 22px;
  font-weight: 300;
  line-height: 22px;
`;

export const SneakerImg = css`
  position: absolute;
  
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 293px;
    width: 464px;
    top: 50%;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 356px;
    width: 564px;
    top: 47.5%;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 419px;
    width: 664px;
    top: 45%;
  }
`;

export const bold = css`
  font-weight: 700;
`;