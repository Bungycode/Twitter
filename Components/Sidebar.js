import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsHorizontalIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from "@heroicons/react/outline";

import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  return (
    <div>
      {/* Twitter Logo */}
      <div className="hoverEffect">
        <Image
          width="50"
          height="50"
          src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
          alt="Twitter Icon"
        ></Image>
      </div>

      {/* Menu */}
      <div>
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline" >Tweet</button>

      {/* Mini-Profile */}

    <div className="hoverEffect">
      <Image width="100" height="100" src="/profile-picture.jpg" alt="User Image" ></Image>
      <div className="">
      <h4>Andrew Bungcayao</h4>
      <p>@thedev_andrew</p>
      </div>
      <DotsHorizontalIcon className="h-5" />
    </div>

    </div>
  );
}
