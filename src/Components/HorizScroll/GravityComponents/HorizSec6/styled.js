import { css } from 'pretty-lights';
import { fonts, colors, widths } from '../../../../variables';

export const HorizSec6 = css`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  @media screen and (min-width: ${widths.brandSmUp}px) {
    //width: 100vw;
    width: 800px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    //width: 100vw;
    width: 950px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    width: 1100px;
  }
`;
export const HorizSec6Content = css`
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.white};
  font-family: ${fonts.franklin};

  @media screen and (min-width: ${widths.brandSmUp}px) {
    left: 30vw;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    left: 20vw;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    left: 20vw;
  }
`;

export const MeatRightInfo = css`
  width: 360px;
  align-self: center;
  max-width: 532px;
  position: absolute;
  top: 5vh;
  @media (min-width: 768px) {
    @media (min-height: 1023.98px) {
      top: 10vh;
    }
  }
  text-decoration: none;
  color: ${colors.white};
  &:visited {
    color: ${colors.white};
  }
`;

export const MeatRightLabel = css`
  font-family: ${fonts.karnak};
  font-size: 23px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  margin: 0 0 4px 0;
`;

export const MeatRightQuestion = css`
  font-family: ${fonts.cheltenham};
  font-size: 27px;
  font-weight: 600;
  line-height: 30px;
  font-style: italic;
  margin: 0;
`;

export const MeatRightAuthor = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
  margin: 0;
  line-height: 20px;
`;

export const MeatRightDate = css`
  font-family: ${fonts.franklin};
  font-size: 19px;
  font-weight: 300;
`;


export const MeatImg = css`
  @media screen and (min-width: ${widths.brandSmUp}px) {
    height: 239px;
    width: 424px;
  }
  @media screen and (min-width: ${widths.brandMdUp}px) {
    height: 280px;
    width: 498px;
  }
  @media screen and (min-width: ${widths.brandLgUp}px) {
    height: 280px;
    width: 498px;
  }
`;
