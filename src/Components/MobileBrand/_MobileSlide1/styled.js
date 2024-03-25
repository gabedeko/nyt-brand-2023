import { css } from 'pretty-lights';
//import { fonts, colors } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../../variables';

export const MobileBrand = css`
  display: block;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
`;

export const introTextContainer = css`
  font-family: ${fonts.cheltenham};
  font-weight: 200;
  width: 100%;
  margin-top: 56px;
  @media screen and (max-width: ${widths.brandXsUp}px) {
    margin: 0 auto;
  }

  @media screen and (max-width: ${widths.brandSmUp}px) {
    margin: 0 auto;
  }
`;

export const introText = css`
  color: ${colors.white};
  font-size: 25px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  padding: 0 32px;
  margin-bottom: 64px;
  @media (max-height: 700px) {
    font-size: 23px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    font-size: 37px;
    font-weight: 300;
    line-height: 42px;
    letter-spacing: 0em;
    padding: 0 88px;
    margin-bottom: 64px;
  }
`;

export const introTextBtm = css`
  color: ${colors.white};
  font-size: 25px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  padding: 0 32px;
  margin-bottom: 8px;
  @media (max-height: 700px) {
    font-size: 23px;
  }
  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    font-size: 37px;
    font-weight: 300;
    line-height: 42px;
    letter-spacing: 0em;
    padding: 0 88px;
    margin-bottom: 8px;
  }
`;

export const noWidow = css`
  white-space: nowrap;
`;

export const BrandSlider = css`
  max-width: 100vw;
  color: yellow;
`;

export const MobileSlide1 = css``;

export const NextArrow = css`
display: block;
margin: 7vh auto 0;
`;


export const introTextTabs = css`
  list-style-type: none;
  color: ${colors.white};
  font-size: 25px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  padding: 0 32px;
  margin-top: 0;
  @media (max-height: 700px) {
    font-size: 23px;
  }
  @media screen and (min-width: ${widths.brandSmUp}px) {
    
  }
  @media screen and (min-width: 571px) {
    font-size: 37px;
    font-weight: 300;
    line-height: 42px;
    letter-spacing: 0em;
    padding: 0 88px;
    margin-top: 0;
  }
`;

export const introTextTab = css`
  cursor: pointer;
  margin: 0;
  opacity: .5;
  //border-bottom: 1.5px solid rgba(255,255,255,0);
  transition: opacity ease-in-out .3s;

  &.active {
    opacity: 1;
    transition: opacity ease-in-out .3s;
  }
  &:hover {
    opacity: 1;
    //border-bottom: 1.5px solid rgba(255,255,255,1);
    transition: opacity ease-in-out .3s;
    
  }
`;