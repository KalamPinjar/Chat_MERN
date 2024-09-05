/* eslint-disable react/prop-types */
import { useAuth } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuth();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser?._id;
  const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-sky-500" : "bg-slate-500";
  return (
    <div className={chatClassName}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Avatar Tailwind CSS Component" />
        </div>
      </div>
      <div className={`chat-bubble bg-sky-500 text-white ${bubbleBgColor} `}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-white/85 text-xs flex gap-1 items-center">
        <p>{new Date(message.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Message;
