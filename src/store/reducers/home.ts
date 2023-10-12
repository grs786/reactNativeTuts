import {} from '../actions/home-action-types';

interface InitalState {
  homeVideo: any;
  dashboardBanner: any;
  servicesList: any;
  commissionsList: any;
  commissionVideo: any;
}

const initialState: InitalState = {
  homeVideo: null,
  dashboardBanner: null,
  servicesList: null,
  commissionsList: null,
  commissionVideo: null,
};

export default function user(state = initialState, {payload, type}: any) {
  switch (type) {
    default:
      return state;
  }
}
