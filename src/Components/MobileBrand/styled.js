import { css } from 'pretty-lights';
//import { fonts, colors, widths } from '@/LandingPages/variables';
import { fonts, colors, widths } from '../../variables';

export const MobileBrand = css`
  display: block;
  color: ${colors.white};
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  @media (min-width: ${widths.medium}px) {
    display: none;
  }
  height: 100vh;
`;

export const LogoLink = css`
  height: 25px;
  width: 186.11111450195312px;
  border-radius: 0px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1002;
  text-decoration: none;
  color: ${colors.white};
`;

export const LogoWhite = css`
  height: 25px;
  width: 186.11111450195312px;
  border-radius: 0px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top:2vh;
  text-align: center;
`;

export const introTextContainer = css`
  font-family: ${fonts.cheltenham};
  font-weight: 200;
  width: 100%;

  @media screen and (min-width: 576px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }
`;

export const introText = css`
  color: ${colors.white};
  font-size: 25px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
`;

export const noWidow = css`
  white-space: nowrap;
`;

export const BrandSlider = css`
  max-width: 100vw;
  color: white;
  .slick-dots {
    opacity: 1;
    top: 6vh;
    height: 24px;
    left: 0;
    z-index: 1;
  }
  .slick-dots.hide-top-bar {
    opacity: 0;
    top: 40px;
    height: 24px;
    left: 0;
    z-index: -10;
  }


  .slick-dots li {
    margin: 0 3px;
    @media screen and (max-width: ${widths.brandXsUp}px) {
      width: 5vw;
    }
  
    @media screen and (max-width: ${widths.brandSmUp}px) {
      width: 5vw;
    }
  }

  .slick-dots li button {
    border: 1px solid ${colors.white};
    width: 24px;
    height: 1px;
    padding: 0px;
    @media screen and (max-width: ${widths.brandXsUp}px) {
      width: 5vw;
    }
  
    @media screen and (max-width: ${widths.brandSmUp}px) {
      width: 5vw;
    }
  }
  .slick-dots .slick-active button {
    border: 1px solid ${colors.white};
  }

  .slick-dots .slick-active ~ li button {
    border: 1px solid #2e1900;
  }

  .slick-dots li button::before {
    color: transparent !important;
  }

  .slick-slider {
    position: inherit;
  }

  .slick-slide {
    height: 100vh;
    top: 11vh;
  }

  .slick-slide.slick-active.slick-current{
    z-index: 2;
  }
  .slick-slide.slick-active.slick-current.fadeInRight{
    animation: fadeInRight .6s 1;
  }

  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0)
    }
  
    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }
  
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0)
    }
  
    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }
  
  .animate__fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight
  }

  .slick-slide.slick-active.slick-current.fadeInLeft{
    animation: fadeInLeft .6s 1;
  }

  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0)
    }
  
    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }
  
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0)
    }
  
    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
    }
  }
  
  .animate__fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft
  }

  .slick-slide div:first-child {
    height: 100%;
  }

  .slick-prev {
    left: 0;
    width: 15vw;
    height: 80vh;
    z-index: 1;
    //background-color: red;
    display: none;
  }

  .slick-next {
    right: 0;
    width: 15vw;
    height: 80vh;
    z-index: 1;
    //background-color: green;
    display: none;
  }

  .slick-prev::before, .slick-next::before {
    display: none;
  }
`;

