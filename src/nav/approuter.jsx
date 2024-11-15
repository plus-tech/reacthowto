import {
  Route,
  Routes,
} from 'react-router-dom';

import SlideCarousel from '../howtos/slidecarousel.jsx';
import Layout from '../howtos/layout.jsx';
import Accordion from '../howtos/accordion.jsx';
import Excel from '../howtos/excel.jsx';

export default function AppRouter(){
    return(
      <Routes>
        <Route path='/'                          element={<SlideCarousel />} />
        <Route path='/slidecarousel'             element={<SlideCarousel />} />
        <Route path='/layout'                    element={<Layout />} />
        <Route path='/excel'                     element={<Excel />} />
        <Route path='/accordion'                 element={<Accordion />} />
      </Routes>
    );
}
