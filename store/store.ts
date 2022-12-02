import { Flights } from './../../server/src/helpers/types';
import create from 'zustand';

interface State {
  from: string | number;
  setFrom: (from: string | number) => void;

  to: string | number;
  setTo: (to: string | number) => void;

  adultsQuantity: number;
  setAdultsQuantity: (adultsQuantity: number) => void;

  minorQuantity: number;
  setMinorQuantity: (minorQuantity: number) => void;

  roundTrip: string | number;
  setRoundTrip: (roundTrip: string | number) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  go: string;
  setGo: (go: string) => void;

  back: string;
  setBack: (back: string) => void;

  flights: Flights;
  setFlights: (flights: any) => void;

  allFlights: Flights[];
  setAllFlights: (allFlights: Flights[]) => void;

  buttonClicked: boolean;
  setButtonClicked: (buttonClicked: boolean) => void;
}

const useStore = create<State>((set) => ({
  from: 'Amsterdam',
  setFrom: (from) =>
    set((state) => ({
      ...state,
      from,
    })),

  to: 'Amsterdam',
  setTo: (to: any) =>
    set((state) => ({
      ...state,
      to,
    })),

  adultsQuantity: 1,
  setAdultsQuantity: (adultsQuantity) =>
    set((state) => ({
      ...state,
      adultsQuantity,
    })),

  minorQuantity: 0,
  setMinorQuantity: (minorQuantity) =>
    set((state) => ({
      ...state,
      minorQuantity,
    })),

  roundTrip: 'no',
  setRoundTrip: (roundTrip) =>
    set((state) => ({
      ...state,
      roundTrip,
    })),

  loading: false,
  setLoading: (loading) =>
    set((state) => ({
      ...state,
      loading,
    })),

  go: '2022-12-12',
  setGo: (go) =>
    set((state) => ({
      ...state,
      go,
    })),

  back: '2022-12-12',
  setBack: (back) =>
    set((state) => ({
      ...state,
      back,
    })),

  flights: {
    flight_id: '',
    depatureLocation: '',
    arrivalLocation: '',
    itineraries: [],
  },
  setFlights: (flights) =>
    set((state) => ({
      ...state,
      flights,
    })),

  allFlights: [],
  setAllFlights: (allFlights) =>
    set((state) => ({
      ...state,
      allFlights,
    })),

  buttonClicked: false,
  setButtonClicked: (buttonClicked: boolean) =>
    set((state) => ({
      ...state,
      buttonClicked,
    })),
}));

export default useStore;
