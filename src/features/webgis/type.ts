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
};

export type FindedPoint = {
  Id: number;
  FacilityPoints: number;
  XX: number;
  YY: number;
};
