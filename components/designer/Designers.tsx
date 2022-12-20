import styled from "styled-components";
import tw from "twin.macro";
import { colors } from "../../libs/data";
import { Wrapper } from "../BaseLayout";
import Photo from "./Photo";

const Top = styled.div`
  ${tw`w-full`}
`;
const Middle = styled.div`
  ${tw`w-full text-xs font-bold flex justify-center`}
`;

const Title = styled.h1`
  ${tw`w-full mx-auto text-3xl font-bold text-center`}
`;

const BottomBtn = styled.button`
  ${tw`w-full text-sm font-bold flex justify-center bg-blue-700 text-white p-2 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
`;

const Photos = styled.div`
  ${tw`w-full grid grid-cols-2 gap-2 my-10`}
`;
const Designers = () => {
  return (
    <Wrapper>
      <Top>
        <svg
          className='h-12 w-12 cursor-pointer'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
      </Top>
      <Middle>SIMPLE TAG</Middle>
      <Title>Work with best designers</Title>
      <Photos>
        {colors.map((color, idx) => {
          return <Photo bgColor={color} key={idx} id={idx} />;
        })}
      </Photos>
      <BottomBtn>
        <span>{`Let's get it done`}</span>
      </BottomBtn>
    </Wrapper>
  );
};

export default Designers;
