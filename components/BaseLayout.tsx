import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`sm:w-80 max-w-lg p-4 flex-col h-full`}
  background-color: ${(props) => (props.color ? props.color : "white")};
`;
