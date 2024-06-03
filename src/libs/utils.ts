import _ from 'lodash';
import proj4 from 'proj4';

import { EPSGValuesType } from '../types';
import { EPSGValues, headerCSV } from './options';

export const switchEPSG = (
  current: keyof EPSGValuesType,
  target: keyof EPSGValuesType,
  coordinate: number[]
) => {
  const convert = proj4(EPSGValues[current], EPSGValues[target]);
  return convert.forward(coordinate);
};

export const geoJsonToCsv = (geoJson: any) => {
  const rows = _.flatten(
    geoJson.features.map((feature: any, featuresIndex: number) =>
      _.flatten(
        feature.geometry.coordinates.map((coordinate: any, coordinateIndex: number) =>
          coordinate.map((item: any) => [
            featuresIndex,
            feature.type,
            feature.geometry.type,
            coordinateIndex,
            item[0],
            item[1],
          ])
        )
      )
    )
  );
  return [headerCSV, ...rows];
};

export const csvToGeoJson = (csv: any[]) => {
  const features = _.groupBy(csv.slice(1), (item) => item[0]);
  return {
    type: 'FeatureCollection',
    features: Object.values(features).map((feature: any) => ({
      type: feature[0][1],
      geometry: {
        type: feature[0][2],
        coordinates: Object.values(_.groupBy(feature, (item) => item[3])).map((coordinate: any) =>
          coordinate.map((item: any) => [item[4], item[5]])
        ),
      },
    })),
  };
};

export const csv3857ToGeoJson = (csv: any[], type: string) => {
  console.log(csv.slice(1));

  switch (type) {
    case 'point':
      return {
        type: 'FeatureCollection',
        features: csv.slice(1).map((item) => ({
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: switchEPSG('EPSG3405', 'EPSG4326', [item[1], item[2]]),
          },
        })),
      };
    case 'line':
      return {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: csv
                .slice(1)
                .map((item) => switchEPSG('EPSG3405', 'EPSG4326', [item[1], item[2]])),
            },
          },
        ],
      };
    case 'polygon':
      return {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                csv
                  .slice(1)
                  .map((item) =>
                    switchEPSG('EPSG3405', 'EPSG4326', [Number(item[1]), Number(item[2])])
                  ),
              ],
            },
          },
        ],
      };
    default:
      return {
        type: 'FeatureCollection',
        features: [],
      };
  }
};
