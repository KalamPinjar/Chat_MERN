import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./Logout";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <ul
      className={`menu menu-compact dropdown-content space-y-4 min-h-[550px]  md:hidden border-r ${
        open ? "min-w-[700px]" : ""
      }`}
    >
      <li onClick={() => setOpen(!open)}>
        <a>
          <BiMenu className="w-6 h-6" />
        </a>
      </li>
      {open && (
        <div className="flex flex-col min-h-[450px]">
          <SearchInput setOpen={setOpen} />
          <div className="divider px-3"></div>
          <div onClick={() => setOpen(!open)}>
            <Conversations />
          </div>
          <LogoutButton />
        </div>
      )}
    </ul>
  );
};

export default MobileSidebar;
