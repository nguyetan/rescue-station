import proj4 from 'proj4';
import { parseShp } from 'shpjs';

import { EPSGValuesType, ImportSupportedType } from '../types';
import { EPSGValues } from './options';

export const switchEPSG = (
  current: keyof EPSGValuesType,
  target: keyof EPSGValuesType,
  coordinate: number[]
) => {
  const convert = proj4(EPSGValues[current], EPSGValues[target]);
  return convert.forward(coordinate);
};

export const convertFileToGeoJson = async (type: ImportSupportedType, file: File) => {
  switch (type) {
    case 'geojson': {
      const text = await file.text();
      return JSON.parse(text);
    }
    case 'shp': {
      const buffer = await file.arrayBuffer();
      const geometries = parseShp(buffer);
      const geoJson = {
        type: 'FeatureCollection',
        features: geometries.map((geometry) => ({
          type: 'Feature',
          geometry,
          properties: {},
        })),
      };
      return geoJson;
    }
    default:
      throw new Error('Unsupported file type');
  }
};
