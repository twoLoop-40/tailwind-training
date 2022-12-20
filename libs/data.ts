import { FriendProps } from "../components/friends/Invite";
import type { WeatherData } from "../components/weather/Weather";

export const weatherData: WeatherData[] = [
  { city: "Casius", temperature: 85, country: "Mars", time: "12AM" },
  {
    city: "Dlacria",
    temperature: 85,
    country: "Mars",
    time: "12AM",
    color: "#FFBD4B",
  },
  {
    city: "New York",
    temperature: 85,
    country: "USA",
    time: "12AM",
    color: "#02C6AD",
  },
  {
    city: "Zomato",
    temperature: 20,
    country: "India",
    time: "12AM",
    color: "#F85A33",
  },
];

export const colors = ["#FFBD4B", "##02C6AD", "#FF89BB", "#F85A33"];

export const people: FriendProps[] = [
  { firstName: "Bill", lastName: "Rizer", jobTitle: "Planet Designer" },
  { firstName: "Genbei", lastName: "Yagy", jobTitle: "Planet Designer" },
  { firstName: "Lancy", lastName: "Neo", jobTitle: "Rogue Corp" },
  { firstName: "Bill", lastName: "Rizer", jobTitle: "Hard Cops" },
  { lastName: "Konami", jobTitle: "Xenon Creator" },
];
