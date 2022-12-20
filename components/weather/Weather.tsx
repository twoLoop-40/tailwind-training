import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../BaseLayout";
import LocalWeather from "./LocalWeather";

const Title = styled.h1`
  ${tw`text-3xl font-extrabold`}
`;
const Icon = styled.div`
  ${tw`flex justify-center py-5 cursor-pointer mt-10`}
`;

const Boxes = styled.div`
  ${tw`flex flex-col space-y-2 my-2`}
`;

export interface WeatherData {
  city: string;
  country: string;
  time: string;
  temperature: number;
  color?: string;
}

const Weather = ({ todayWeathers }: { todayWeathers: WeatherData[] }) => {
  return (
    <Wrapper>
      <Title>Weather</Title>
      <Boxes>
        {todayWeathers.map((weather, idx) => {
          return <LocalWeather key={idx} weather={weather} />;
        })}
      </Boxes>
      <Icon>
        <svg
          className='h-12 w-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
      </Icon>
    </Wrapper>
  );
};

export default Weather;
