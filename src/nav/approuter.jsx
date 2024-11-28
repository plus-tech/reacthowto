import {
  Route,
  Routes,
} from 'react-router-dom';

import SlideCarousel from '../howtos/slidecarousel.jsx';
import Layout from '../howtos/layout.jsx';
import Accordion from '../howtos/accordion.jsx';
import Excel from '../howtos/excel.jsx';
import Quickbar from '../howtos/quickbar.jsx';
import ExpandingGrid from '../howtos/expandinggrid.jsx';
import ColumnCards from '../howtos/columncards.jsx';
import ListGridView from '../howtos/listgridview.jsx';
import SideNav from '../nav/sidenav.jsx';

import { MenuItemText, MenuItemPath } from '../comm/constants.js';

export default function AppRouter(){
    return(
      <Routes>
        <Route path={MenuItemPath.default}            element={<SlideCarousel />} />
        <Route path={MenuItemPath.slideshow}          element={<SlideCarousel />} />
        <Route path={MenuItemPath.layout}             element={<Layout />} />
        <Route path={MenuItemPath.excel}              element={<Excel />} />
        <Route path={MenuItemPath.accordion}          element={<Accordion />} />
        <Route path={MenuItemPath.quickbar}           element={<Quickbar />} />
        <Route path={MenuItemPath.expandinggrid}      element={<ExpandingGrid />} />
        <Route path={MenuItemPath.columncards}        element={<ColumnCards />} />
        <Route path={MenuItemPath.listgridview}       element={<ListGridView />} />
        <Route path={MenuItemPath.sidenav}            element={<SideNav />} />
      </Routes>
    );
}
