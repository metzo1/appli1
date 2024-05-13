import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '4f4911da-604e-4b5d-a25e-9e2a8dbaac5f',
};

export const sampleWithPartialData: IAuthority = {
  name: '4304766b-4294-4c42-925d-8b0535c4801f',
};

export const sampleWithFullData: IAuthority = {
  name: '56b9c4e8-b885-469c-b3a6-1854bd6a8327',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
