
export interface Item {
  id: string;
  imageUrl: string;
  itemName: string;
  quantity: number;
  category: string;
  price: number;
  isBooked: boolean;
  bookingDate: BookingDate;
}

export interface BookingDate{
  start: string;
  end: string;
}
