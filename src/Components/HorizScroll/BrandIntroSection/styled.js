import { css } from 'pretty-lights';
import { fonts, widths } from '../../../variables';

export const brandIntroContainer = css`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  //height: calc(100vh - 40px);
  padding: 30px;
  
  // width: 1020px;
  // max-width: 1020px;
  width: 100vw;
  height:100%;
  position: relative;
  @media screen and (min-width: 1600px) {
    max-width: 1560px;
  }
`;

export const introTextContainer = css`
  font-family: ${fonts.cheltenham};
  font-weight: 200;
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (min-width: 576px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }
`;

export const introText = css`
  color: #fff;

  margin: -25vh 0 0;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      margin: 0 0;
    }
  }

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

  @media screen and ( max-height: 450px ){
    font-size: 36px;
  }
`;

export const introTextEnd = css`
font-family: ${fonts.cheltenham};
  color: #fff;

  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;

  @media screen and (min-width: ${widths.brandSmDown}px) {
    font-size: 38.5px;
    line-height: 45.5px;
    transform: translate(-50%,-50%);
  }
  @media screen and (min-width: ${widths.brandMdDown}px) {
    font-size: 46px;
    line-height: 55px;
    transform: translate(-50%,-50%);
  }
  @media screen and (min-width: ${widths.brandLgDown}px) {
    font-size: 55px;
    line-height: 65px;
    transform: translate(-50%,-50%);
  }

  @media screen and ( max-height: 700px ){
    position: unset;
    margin-top: 6vh;
    transform: none!important;
  }
  @media screen and ( max-height: 550px ){
    position: unset;
    margin-top: 0;
    transform: none!important;
  }

  &.introTextEnd-tabsContainer {
    display: flex;
    height: 65px;
    @media screen and (min-width: ${widths.brandSmDown}px) {
      height: 45.5px;
    }
    @media screen and (min-width: ${widths.brandMdDown}px) {
      height: 55px;
    }
    @media screen and (min-width: ${widths.brandLgDown}px) {
      height: 65px;
    }
  }
`;

export const introTextTabs = css`
  display: inline;
  list-style-type: none;
  height: 0;
  margin: 0 0 0 -24px;
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


