import {
  Route,
  Routes,
} from 'react-router-dom';

import Test from '../test/test.jsx';
import SlideCarousel from '../howtos/slidecarousel.jsx';
import Layout from '../howtos/layout.jsx';
import Accordion from '../howtos/accordion.jsx';
import Excel from '../howtos/excel.jsx';
import FloatingBar from '../howtos/floatingbar.jsx';
import ExpandingGrid from '../howtos/expandinggrid.jsx';
import ColumnCards from '../howtos/columncards.jsx';
import ListGridView from '../howtos/listgridview.jsx';
import SideNav from '../nav/sidenav.jsx';
import CompareImg from '../howtos/compareimg.jsx';
import ShrinkNavBar from '../howtos/shrinknavbar.jsx';
import ReadMoreLess from '../howtos/readmoreless.jsx';
import ScrollToTopBtn from '../howtos/scrolltotopbtn.jsx';
import TabGallery from '../howtos/tabgallery.jsx';
import ImageGallery from '../howtos/imagegallery.jsx';
import PortfolioGallery from '../howtos/portfoliogallery.jsx';
import ImageZoom from '../howtos/imagezoom.jsx';
import ImageMagnifier from '../howtos/imagemagnifier.jsx';
import SignupForm from '../howtos/signupform.jsx';
import MultiStepForm from '../howtos/multistepform.jsx';


import { MenuItemText, MenuItemPath } from '../comm/constants.js';

export default function AppRouter(){
    return(
      <Routes>
        <Route path={MenuItemPath.test}               element={<Test />} />
        <Route path={MenuItemPath.default}            element={<SlideCarousel />} />
        <Route path={MenuItemPath.slideshow}          element={<SlideCarousel />} />
        <Route path={MenuItemPath.layout}             element={<Layout />} />
        <Route path={MenuItemPath.excel}              element={<Excel />} />
        <Route path={MenuItemPath.accordion}          element={<Accordion />} />
        <Route path={MenuItemPath.floatingbar}        element={<FloatingBar />} />
        <Route path={MenuItemPath.expandinggrid}      element={<ExpandingGrid />} />
        <Route path={MenuItemPath.columncards}        element={<ColumnCards />} />
        <Route path={MenuItemPath.listgridview}       element={<ListGridView />} />
        <Route path={MenuItemPath.sidenav}            element={<SideNav />} />
        <Route path={MenuItemPath.compareimg}         element={<CompareImg />} />
        <Route path={MenuItemPath.shrinknavbar}       element={<ShrinkNavBar />} />
        <Route path={MenuItemPath.readmoreless}       element={<ReadMoreLess />} />
        <Route path={MenuItemPath.scrolltotopbtn}     element={<ScrollToTopBtn />} />
        <Route path={MenuItemPath.tabgallery}         element={<TabGallery />} />
        <Route path={MenuItemPath.imggallery}         element={<ImageGallery />} />
        <Route path={MenuItemPath.portfgallery}       element={<PortfolioGallery />} />
        <Route path={MenuItemPath.imagezoom}          element={<ImageZoom />} />
        <Route path={MenuItemPath.imagemagnifier}     element={<ImageMagnifier />} />
        <Route path={MenuItemPath.signup}             element={<SignupForm />} />
        <Route path={MenuItemPath.multistepform}      element={<MultiStepForm />} />

      </Routes>
    );
}
