export interface Prices {
  currency: string;
  adults: number;
  child: number;
}

export interface Itinerary {
  depatureAt: string;
  arriveAt: string;
  avaliableSeats: number;
  prices: Prices[];
}

export interface Flight {
  fligth_id: string;
  depatureDestination: string;
  arrivalDestination: string;
  itineraries: {
    depatureAt: string;
    arrivalAt: string;
    avaliableSeats: number;
    price: { currency: string; adult: number; children: number }[];
  }[];
}

export interface Flights {
  flight_id: string;
  depatureLocation: string;
  arrivalLocation: string;
  itineraries: Itinerary[];
}
