import styled from "styled-components";
import tw from "twin.macro";
import { WeatherData } from "./Weather";

const Wrapper = styled.div`
  ${tw`w-full p-2 flex flex-col space-y-2`}
`;
const Box = styled.div`
  background-color: ${(props) => (props.color ? props.color : "white")};
  ${tw`flex w-full border-2 border-gray-900 py-2 px-4 rounded-lg justify-between shadow-md border-b-4`}
`;

const Info = styled.div`
  ${tw`flex flex-col space-y-1`}
`;

const LocalWeather = ({ weather }: { weather: WeatherData }) => {
  const { city, country, time, temperature, color } = weather;
  return (
    <Wrapper>
      <Box color={color}>
        <Info>
          <div className='text-xl font-bold'>
            <span>{city}</span>
          </div>
          <div className='text-xs font-bold'>
            <span>{country}</span>, <span>{time}</span>
          </div>
        </Info>
        <div className='text-3xl font-bold'>{temperature}&deg;</div>
      </Box>
    </Wrapper>
  );
};

export default LocalWeather;
