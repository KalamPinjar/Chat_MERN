import { TiMessages } from "react-icons/ti";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";
import { useEffect, useRef } from "react";
import useMessageSocket from "../hooks/useMessagesSocket";

const Messsages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useMessageSocket();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="max-h-[450px] shadow-xl rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(10)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <div className="flex items-center justify-center text-center flex-col min-h-[450px]">
          <p className="text-lg font-bold text-gray-300">
            No messages yet, start a conversation
          </p>
          <TiMessages className="text-3xl md:text-6xl text-center text-gray-300" />
        </div>
      )}
    </div>
  );
};

export default Messsages;
