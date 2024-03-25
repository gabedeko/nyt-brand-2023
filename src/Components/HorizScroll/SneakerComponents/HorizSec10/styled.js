import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec10 = css`
  position: relative;
  height: 25vh;
  
  @media screen and (min-width: ${widths.brandSmDown}px) {
    width: 100vw;
    margin-top: 40vh;
  }
  @media screen and (min-width: ${widths.brandMdDown}px) {
    width: 100vw;
    height: 0;
    margin-top: 60vh;
  }
  @media screen and (min-width: ${widths.brandLgDown}px) {
    width: 100vw;
    height: 0;
    margin-top: 80vh;
  }

  color: ${colors.white};
  font-family: ${fonts.franklin};

  @media (min-width: 768px) {
    @media (min-height: 1024px) {
      margin-top: 60vh;
    }
  }
`;

export const HorizSec10Content = css`
  position: absolute;
  top: -100vh;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-align: center;
`;

export const GoMsg = css`
  // position: absolute;
  // top: 50vh;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // margin: 0;
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
    //width: 760px;
  }
`;

export const GoVideo = css`
  height: 610px;
  width: 1080px;
  margin-top: 20vh;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  
`;

export const GoBack = css`
  font-family: ${fonts.cheltenham};
  font-size: 36px;
  font-weight: 300;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  margin-top:120px
`;

export const GoBackLink = css`
  color: ${colors.white};
  text-decoration: none; 
`;