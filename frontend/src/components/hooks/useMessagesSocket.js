import { useEffect } from "react";
import { useSocket } from "../../context/socketContext";
import useConversation from "../../store/useConversation";
import notification from "../../assets/sounds/notification.mp3";

const useMessageSocket = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (data) => {
      const sound = new Audio(notification);
      sound.play();
      setMessages([...messages, data]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};

export default useMessageSocket;
