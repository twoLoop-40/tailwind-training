import styled from "styled-components";
import tw from "twin.macro";

export interface FriendProps {
  firstName?: string;
  lastName: string;
  jobTitle: string;
}

const Wrapper = styled.div`
  ${tw`w-full p-2 flex justify-between bg-gray-100 rounded-lg border-gray-900 border-2`}
`;
const FaceCircle = styled.div`
  ${tw`w-12 h-12 rounded-full bg-gray-400`}
`;
const PersonInfo = styled.div`
  ${tw`flex flex-col `}
`;
const InviteBtn = styled.button`
  background-color: #ffbd4b;
  ${tw`ml-5 h-8 w-12 rounded-xl border-2 border-b-4 border-gray-900 text-center text-xs font-bold text-gray-900 hover:bg-gray-800 hover:text-white`}
`;

const Invite = ({ friend }: { friend: FriendProps }) => {
  const { firstName, lastName, jobTitle } = friend;
  return (
    <Wrapper>
      <div className='flex space-x-2'>
        <FaceCircle />
        <PersonInfo>
          <div className='text-xl font-bold'>
            <span>{firstName ? firstName : null}</span> <span>{lastName}</span>
          </div>
          <div className='text-xs font-bold'>
            <span>{jobTitle}</span>
          </div>
        </PersonInfo>
      </div>
      <div className='flex flex-col justify-center '>
        <InviteBtn>Invite</InviteBtn>
      </div>
    </Wrapper>
  );
};

export default Invite;
