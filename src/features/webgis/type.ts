export type CustomLayer = {
  id: string;
  geoJson: any;
  color: string;
  converPoint?: boolean;
  name: string;
};

export type FindStationType = {
  firstStation: string;
  lastStation: string;
  numberStation: string;
  type: string;
};

export type WebgisState = {
  handling: boolean;
  layers: CustomObject<CustomLayer>;
  stations: CustomObject<FindedPoint[]>;
  center: number[];
};

export type FindedPoint = {
  Id: number;
  FacilityPoints: number;
  XX: number;
  YY: number;
};

export type Feature = {
  type: string;
  properties: {
    name: string;
    color: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
};

export type GeoJson = {
  type: string;
  features: Feature[];
};
