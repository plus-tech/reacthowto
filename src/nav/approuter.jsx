import {
  Route,
  Routes,
} from 'react-router-dom';

import SlideCarousel from '../howtos/slidecarousel.jsx';
import Axios from '../howtos/axios.jsx';

export default function AppRouter(){
    return(
      <Routes>
        <Route path='/'                         element={<SlideCarousel />} />
        <Route path='/slidecarousel'            element={<SlideCarousel />} />
        <Route path='/axios'                    element={<Axios />} />
      </Routes>
    );
}
