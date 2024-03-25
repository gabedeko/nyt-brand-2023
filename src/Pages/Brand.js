import React, { useState, useEffect, SyntheticEvent } from 'react';

// import {magnoliaAdapter} from "@standalone/utilities";

//import LandingPageNavigation from '@/LandingPages/Common/LandingPageNavigation';
// import BrandIntroSection from '@/LandingPages/Brand/Components/BrandIntroSection/BrandIntroSection';
//import LandingPageBrandBottomSection from '@/Units/LandingPageBrandBottomSection';
import Nav from "../Components/Nav/Nav";
import MobileBrand from '../Components/MobileBrand/MobileSlides';
import Endline from "../Components/Endline/Endline";
import Footer from "../Components/Footer/Footer";
import HorizScroll from "../Components/HorizScroll/HorizScroll"

import * as styles from './styled';
/**
 * BrandLandingPage is a landing page shell for the /subscription/understanding landing page
 *
 */
function BrandLandingPage() {
  //anon, regi, or sub

  return (
    <>
      
      <Nav />
      {/* <LandingPageNavigation /> */}
      <HorizScroll />
      {/* <HorizontalContainer /> */}
      {/* <LandingPageBrandBottomSection /> */}
      <MobileBrand />
    </>
  );
}

export default BrandLandingPage;