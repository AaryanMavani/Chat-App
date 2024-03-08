import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";

function Conversations() {
  const { conversations } = useGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
}

export default Conversations;
