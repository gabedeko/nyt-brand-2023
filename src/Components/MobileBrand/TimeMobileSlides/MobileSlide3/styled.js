import { css } from 'pretty-lights';
//import { fonts } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../../variables';

export const MobileSlide2 = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const TimeIntroMsg = css`
  font-family: ${fonts.cheltenham};
  //margin: 5vh 0 0 0;
  
  font-size: 25px;
  font-weight: 200;
  line-height: 29px;
  letter-spacing: 0em;
  padding: 0 32px;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    font-size: 37px;
    font-weight: 300;
    line-height: 42px;
    letter-spacing: 0em;
    padding: 0 88px;
  }
`;

export const TimeIntroWord = css`
  font-weight: 500;
`;

export const SeasoningImg2 = css`
    width: calc(100vw - 64px);
  margin: 5vh auto;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    margin-top: 5%;
    padding: 0 80px;
    
  }
`;

export const SeasoningImg1 = css`
  width: 40%;
  margin: 5vh auto;
  position: absolute;
  top: 50vh;
  right: 10%;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    // margin-top: 5%;
    // padding: 0 80px;
    
  }
`;

export const TimeInfo = css`
  max-width: 35vw;
  position: absolute;
  top: 62vh;
  text-decoration: none;
  color: ${colors.white};

  padding: 0 32px;
  @media screen and (min-width: 571px) {
    padding: 0 80px;
  }

  @media screen and (min-width: ${widths.brandSmUp}px) {
  }
`;

export const TimeLabel = css`
  font-family: ${fonts.karnak};
  margin: 0 0 4px 0;
  
  font-size: 12px;
  
  font-weight: 800;
  line-height: 12px;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    font-size: 22px;
    font-weight: 800;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 4px;
  }
`;

export const Timeubtitle = css`
  font-family: ${fonts.cheltenham};
  font-style: italic;

  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  margin: 2px 0px;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    font-size: 27px;
    font-weight: 700;
    line-height: 24px;
    margin: 2px 0px;
  }
`;

export const TimeAuthor = css`
  font-family: ${fonts.franklin};
  margin: 0;
  
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0em;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    font-size: 22px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

export const TimeDate = css`
  font-family: ${fonts.franklin};
  margin: 0;

  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
  letter-spacing: 0em;

  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    font-size: 22px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

export const bold = css`
  font-weight: 700;
`;