import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Taxi Resavation",
    path: "/taxi-resavation",
    icon: <IoIcons.IoMdPlay />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Items",
    icon: <RiIcons.RiBookmark3Fill />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Item Lists",
        path: "/items/my",
        icon: <IoIcons.IoIosListBox />,
        cName: "sub-nav",
      },
      {
        title: "Item Records",
        path: "/itemsrecords",
        icon: <RiIcons.RiBarChartFill />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "available rooms",
    path: "/availableRooms",
    icon: <IoIcons.IoMdTime />,
  },

  {
    title: "view members",
    path: "/viewMembers",
    icon: <IoIcons.IoMdColorFill />,
  },
  {
    title: "Item Requests",
    path: "/requests/for/items",
    icon: <IoIcons.IoMdPaperPlane />,
  },

  {
    title: "My Profile",
    path: "/myprofile",
    icon: <IoIcons.IoMdPerson />,
  },
];
