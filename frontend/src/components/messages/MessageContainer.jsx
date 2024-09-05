import { useEffect } from "react";
import useConversation from "../../store/useConversation";
import MessageInput from "./MessageInput";
import Messsages from "./Messages";

import { TiMessages } from "react-icons/ti";
import { useAuth } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[550px] flex-1  flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="min-h-[550px] min-w-[350px]">
          <div className="bg-slate-950 px-4 py-2 mb-2">
            <span className="label-text">To: </span>{" "}
            <span className="text-white-900 font-bold">
              {selectedConversation?.fullName}
            </span>
          </div>

          <Messsages />
          <MessageInput />
        </div>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
