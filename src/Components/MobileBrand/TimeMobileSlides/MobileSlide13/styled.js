import { css } from 'pretty-lights';
//import { fonts, colors } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../../variables';

export const MobileSlide13 = css`
  height: 100vh;
  overflow: scroll;
`;

export const MobileSlide13Top = css`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-evenly;
  height: 135%;
  align-items: center;
  text-align: center;
`;

export const TimeIntroMsg = css`
  font-family: ${fonts.cheltenham};
  font-size: 25px;
  font-weight: 200;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (min-width: ${widths.brandSmDown}px) {
    margin: px 0 0 0;
  }
  @media screen and (min-width: ${widths.brandMdDown}px) {
    margin: 60px 0 0 0;
  }
  @media screen and (min-width: ${widths.brandLgDown}px) {
    margin: 60px 0 0 0;
  }
  padding: 0 32px;
`;

export const TimeIntroWord = css`
  font-weight: 500;
`;

export const MobileBrandSlide2Img = css`
  width: 300px;
  //position: absolute;
  margin-top: 35%;
  margin-left: auto;
  margin-right: auto;
  //left: 0;
  //right: 0;
  text-align: center;

  @media screen and (min-width: 571px) {
    width: 90%;
  }
`;

export const TimeInfo = css`
  max-width: 60vw;
  margin-top: -120px;
  padding: 32px;
`;

export const TimeLabel = css`
  font-family: ${fonts.karnak};
  font-size: 12px;
  font-weight: 800;
  line-height: 14px;
`;

export const Timeubtitle = css`
  font-family: ${fonts.cheltenham};
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  font-style: italic;
`;

export const TimeAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
`;

export const TimeDate = css`
  font-family: ${fonts.franklin};
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
`;

export const ThanksSection = css`
  background-color: #f4f4f4;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ThanksMsg = css`
  font-family: ${fonts.cheltenham};
  font-size: 36px;
  font-weight: 300;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
  color: ${colors.black};
`;

export const MobileFooter = css`
  height: 332px;
  background-color: ${colors.white};
  // display: flex;
  // flex-direction: row;
  color: ${colors.black};
  font-family: ${fonts.franklin};
`;

export const LogoCol = css``;

export const LogoImg = css`
  width: 216px;
`;

export const AboutCol = css``;

export const HelpCol = css``;

export const ArrowDown = css`
  display: block;
  @media screen and (max-width: ${widths.brandXsUp}px) {
    margin: 40px auto 0;
  }

  @media screen and (max-width: ${widths.brandSmUp}px) {
    margin: 40px auto 0;
  }
`;

export const TimeIntroMsgBtm = css`
  font-family: ${fonts.cheltenham};
  font-size: 25px;
  font-weight: 200;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  @media screen and (min-width: ${widths.brandSmDown}px) {
    margin: px 0 0 0;
  }
  @media screen and (min-width: ${widths.brandMdDown}px) {
    margin: 60px 0 0 0;
  }
  @media screen and (min-width: ${widths.brandLgDown}px) {
    margin: 60px 0 0 0;
  }
  padding: 0 32px;
`;

export const MobileSlide13More = css`
  @media screen and (max-width: ${widths.brandXsUp}px) {
    //position: absolute;
    //top: 66vh;
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
    //left: 0;
    //right: 0;
    text-align: center;
  }

  @media screen and (max-width: ${widths.brandSmUp}px) {
    //position: absolute;
    //top: 66vh;
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
    //left: 0;
    //right: 0;
    text-align: center; 
  }
`;

export const bold = css`
  font-weight: 700;
`;