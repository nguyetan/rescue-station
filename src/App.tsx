import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import { Layout } from 'antd';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Waiting } from './components';
import Home from './pages/Home';
import Webgis from './pages/Webgis';

function App() {
  // [ 106.78207291024566, 10.751507137698976 ]
  // console.log(switchEPSG('TEST', 'EPSG4326', [612684.88301200001, 1189162.6647699999]));

  return (
    <BrowserRouter
      basename={import.meta.env.REACT_APP_STAGE === 'development' ? '' : '/rescue-station'}
    >
      <Suspense fallback={<Waiting />}>
        <Layout style={{ width: '100vw', backgroundColor: 'white' }}>
          <Layout.Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/webgis" element={<Webgis />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
