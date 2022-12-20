import { NextPage } from "next";
import styled from "styled-components";
import tw from "twin.macro";
import Designers from "../components/designer/Designers";
import Friends from "../components/friends/Friends";
import Weather from "../components/weather/Weather";
import { weatherData } from "../libs/data";

const Wrapper = styled.div`
  ${tw`grid grid-cols-3  items-center p-5  justify-center mx-auto bg-gray-200 max-w-7xl`}
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Weather todayWeathers={weatherData} />
      <Designers />
      <Friends />
    </Wrapper>
  );
};

export default Home;
