import styled from "styled-components";
import tw from "twin.macro";
import { people } from "../../libs/data";
import { Wrapper } from "../BaseLayout";
import Invite from "./Invite";
import Search from "./search";

const Top = styled.div`
  ${tw`flex w-full text-2xl font-extrabold space-x-2`}
`;
const Circle = styled.div`
  ${tw`w-10 h-10 px-2 rounded-full bg-white flex items-center justify-center`}
`;

const SearchBox = styled.div`
  ${tw`w-full h-12 relative my-2 px-1 rounded-lg border-2 border-b-4 border-gray-900 flex items-center justify-center bg-white`}
`;

const People = styled.div`
  ${tw`w-full flex flex-col space-y-5 rounded-lg my-4`}
`;
const Friends = () => {
  return (
    <Wrapper color='#FFBD4B'>
      <Top>
        <Circle>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='4'
              d='M15 19l-7-7 7-7'
            ></path>
          </svg>
        </Circle>

        <span className='w-full text-center'>Friends</span>
      </Top>
      <SearchBox>
        <Search />
        <div className='absolute right-0 cursor-pointer bg-white'>
          <svg
            className='h-8 w-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
        </div>
      </SearchBox>
      <People>
        {people.map((person, idx) => {
          return <Invite key={idx} friend={person} />;
        })}
      </People>
    </Wrapper>
  );
};

export default Friends;
