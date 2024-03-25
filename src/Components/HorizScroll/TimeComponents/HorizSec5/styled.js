import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec5 = css`
  position: relative;
  height: 100vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    //width: 100vw;
    width: 820px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    //width: 100vw;
    width: 990px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1100px;
    //width: 100vw;
  }
`;
export const HorizSec5Content = css`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  // @media (min-width: ${widths.mediumLarge}px) {
  //   height: 100vh;
  // }

  color: ${colors.white};
  font-family: ${fonts.franklin};

  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: -30vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: -30vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: -20vw;
  }
`;

export const PhotosImg2 = css`
  position: absolute;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 104px;
    width: 223px;
    right: 0vw;
    top: 55vh;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 113px;
    width: 244px;
    right: 0vw;
    top: 55vh;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    // height: 149px;
    // width: 319px;
    height: 113px;
    width: 244px;
    right: 0vw;
    top: 55.5vh;
  }
`;

export const PhotosImg1 = css`
  position: absolute;
  top: 25vh;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 110px;
    width: 223px;
    right: 15vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 120px;
    width: 244px;
    right: 10vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    // height: 158px;
    // width: 319px;
    height: 120px;
    width: 244px;
    right: 5vw;
  }
`;

export const PhotosTopInfo = css`
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  text-decoration: none;
  width: 300px;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
`;

export const PhotosBtmInfo = css`
  position: absolute;
  top: 70vh;
  text-decoration: none;
  width: 300px;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
  z-index: 1;
`;

export const PhotosLeftLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const PhotosLeftQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const PhotosLeftAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const PhotosLeftDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;
