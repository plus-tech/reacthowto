import {
  Route,
  Routes,
} from 'react-router-dom';

import SlideCarousel from '../howtos/slidecarousel.jsx';
import Layout from '../howtos/layout.jsx';
import Accordion from '../howtos/accordion.jsx';
import Excel from '../howtos/excel.jsx';
import { MenuItemText, MenuItemPath } from '../comm/constants.jsx';

export default function AppRouter(){
    return(
      <Routes>
        <Route path={MenuItemPath.default}            element={<SlideCarousel />} />
        <Route path={MenuItemPath.slideshow}          element={<SlideCarousel />} />
        <Route path={MenuItemPath.layout}             element={<Layout />} />
        <Route path={MenuItemPath.excel}              element={<Excel />} />
        <Route path={MenuItemPath.accordion}          element={<Accordion />} />
      </Routes>
    );
}
