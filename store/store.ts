import { Flights } from './../types/types';
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

  flightsTo: any;
  setFlightsTo: (flightsTo: any) => void;

  flightsBack: any;
  setFlightsBack: (flightsBack: any) => void;

  detailFlight: any;
  setDetailFlight: (detailFlight: any) => void;

  chosenFlightBack: any;
  setChosenFlightBack: (chosenFlight: any) => void;

  chosenFlightTo: any;
  setChosenFlightTo: (chosenFlight: any) => void;

  buttonClicked: boolean;
  setButtonClicked: (detailFlight: boolean) => void;
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

  flightsTo: [],
  setFlightsTo: (flightsTo) =>
    set((state) => ({
      ...state,
      flightsTo,
    })),

  flightsBack: [],
  setFlightsBack: (flightsBack) =>
    set((state) => ({
      ...state,
      flightsBack,
    })),

  detailFlight: {},
  setDetailFlight: (detailFlight) =>
    set((state) => ({
      ...state,
      detailFlight,
    })),

  chosenFlightBack: '',
  setChosenFlightBack: (chosenFlightBack) =>
    set((state) => ({
      ...state,
      chosenFlightBack,
    })),
  chosenFlightTo: '',
  setChosenFlightTo: (chosenFlightTo) =>
    set((state) => ({
      ...state,
      chosenFlightTo,
    })),

  buttonClicked: false,
  setButtonClicked: (buttonClicked: boolean) =>
    set((state) => ({
      ...state,
      buttonClicked,
    })),
}));

export default useStore;
