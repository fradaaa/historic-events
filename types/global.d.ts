type TimeSlice = {
  startYear: number;
  endYear: number;
  title: string;
  events: TimeSliceEvent[];
};

type TimeSliceEvent = {
  year: number;
  eventDetails: string;
};
