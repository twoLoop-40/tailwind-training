import styled from "styled-components";
import tw from "twin.macro";

const Input = styled.input`
  ${tw` w-full h-10 text-xl font-bold focus:outline-none`}
`;
const Search = () => {
  return <Input placeholder='Search with love...' type='text' />;
};

export default Search;
