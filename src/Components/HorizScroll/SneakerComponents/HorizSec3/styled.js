import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

import SqueakingBg2 from '../../../../assets/image-596.svg';

export const HorizSec3 = css`
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
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
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

export const SqueakLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
`;
export const SqueakRight = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-end;
  position: relative;
`;

export const SqueakingImg1 = css`
  position: absolute;
  top: 0;
  
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 450px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 550px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 600px;
  }
`;

export const SqueakingImg2 = css`
  
  position: absolute;
  bottom: 0;
  //right: 7vw;
  right: 0;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    width: 280px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    width: 300px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 340px;
  }
`;

export const SqueakingMsgOne = css`
  position: absolute;
  top: 50%;
  left: 5%;
  /* bring your own prefixes */
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
    width: 760px;
  }
`;

export const SqueakingWordOne = css`
  font-weight: 500;
`;

export const SqueakingWord2 = css`
  font-weight: 500;
`;

export const SqueakingContainer2 = css`
  width: 481px;
  height: 601px;
  background-image: url(${SqueakingBg2});
  margin-left: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SqueakingMsg2 = css`
  position: absolute;
  top: 50%;
  right: -5%;
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
export const SqueakingInfo = css`
  z-index: 1;
  align-self: end;
  max-width: 400px;
  top: 70vh;
  position: absolute;
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;
export const SqueakingLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0;
`;

export const SqueakingQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;
export const SqueakingAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;
export const SqueakingDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;
export const SqueakingConcept = css`
  font-family: ${fonts.franklin};
  font-size: 22px;
  font-weight: 300;
  line-height: 22px;
`;
