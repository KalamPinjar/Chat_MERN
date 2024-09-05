import Conversations from "./Conversations";
import LogoutButton from "./Logout";
import MobileSidebar from "./MobileSidebar";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <>
      <div className="hidden border-r border-slate-500 p-4 md:flex flex-col h-full">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
      <div>
        <MobileSidebar />
      </div>
    </>
  );
};

export default Sidebar;
