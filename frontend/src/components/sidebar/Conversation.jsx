/* eslint-disable react/prop-types */
import { useSocket } from "../../context/socketContext";
import useConversation from "../../store/useConversation";
const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <div>
      <div
        className={`flex gap-2 items-center  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
        ${isSelected ? "bg-sky-500" : " "}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"} `}>
          <div className="w-10 rounded-full">
            <img
              src={conversation.profilePic}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div>
            <p className="text-lg font-semibold">{conversation.fullName}</p>
            <span className="text-sm">last message</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </div>
  );
};

export default Conversation;
