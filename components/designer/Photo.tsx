import styled from "styled-components";
import tw from "twin.macro";

const PhotoBox = styled.label`
  background-color: ${(props) => (props.color ? props.color : "white")};
  ${tw`flex justify-center items-center aspect-square rounded-lg border-2 border-gray-900 cursor-pointer hover:bg-teal-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
`;
const Photo = ({ bgColor, id }: { bgColor: string; id: number }) => {
  return (
    <PhotoBox htmlFor={`${id}`} color={bgColor}>
      <svg
        className='h-12 w-12'
        stroke='currentColor'
        fill='none'
        viewBox='0 0 48 48'
        aria-hidden='true'
      >
        <path
          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <input id={`${id}`} type='file' className='hidden' />
    </PhotoBox>
  );
};

export default Photo;
