export type TimeSlice = {
  startYear: number;
  endYear: number;
  title: string;
  events: TimeSliceEvent[];
};

type TimeSliceEvent = {
  year: number;
  eventDetails: string;
};

export const data: TimeSlice[] = [
  {
    startYear: 1983,
    endYear: 1987,
    title: "Literature",
    events: [
      { year: 1983, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1985, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1985, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1986, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1987, eventDetails: "Lorem ipsum dolor sit amet." },
    ],
  },
  {
    startYear: 1988,
    endYear: 1992,
    title: "Cinema",
    events: [
      { year: 1988, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1989, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1990, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1991, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1992, eventDetails: "Lorem ipsum dolor sit amet." },
    ],
  },
  {
    startYear: 1993,
    endYear: 1998,
    title: "Music",
    events: [
      { year: 1993, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1994, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1995, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1996, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1997, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 1998, eventDetails: "Lorem ipsum dolor sit amet." },
    ],
  },
  {
    startYear: 1999,
    endYear: 2004,
    title: "World",
    events: [
      { year: 1999, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2000, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2001, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2002, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2003, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2004, eventDetails: "Lorem ipsum dolor sit amet." },
    ],
  },
  {
    startYear: 2005,
    endYear: 2015,
    title: "Sports",
    events: [
      { year: 2005, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2006, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2007, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2008, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2009, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2010, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2011, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2012, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2013, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2014, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2015, eventDetails: "Lorem ipsum dolor sit amet." },
    ],
  },
  {
    startYear: 2016,
    endYear: 2022,
    title: "Science",
    events: [
      { year: 2016, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2017, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2018, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2019, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2020, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2021, eventDetails: "Lorem ipsum dolor sit amet." },
      { year: 2022, eventDetails: "Lorem ipsum dolor sit amet." },
    ],
  },
];