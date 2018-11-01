import { Booking } from './../../booking/shared/booking.model';

export class Rental {

    _id: string;
    category: string;
    model: string;
    company: string;
    pickup: string;
    dropoff: string;
    year: number;
    seats: number;
    doors: number;
    specificiations: string;
    dailyRate: number;
    image: string;
    createdAt: string;
    startAt: Date;
    endAt: Date;

    bookings: Booking[];
}


