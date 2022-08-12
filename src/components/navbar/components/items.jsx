import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// ! assets
import avatar from "../../../assets/images/avatar.jpeg";
export default function items() {
  return (
    <div className="items">
      <div className="item">
        English
        <LanguageIcon />
      </div>
      <div className="item">
        <DarkModeOutlinedIcon />
      </div>
      <div className="item">
        <FullscreenExitOutlinedIcon className="icon" />
      </div>
      <div className="item">
        <NotificationsNoneOutlinedIcon className="icon" />
        <div className="counter">10</div>
      </div>
      <div className="item">
        <ChatBubbleOutlineOutlinedIcon className="icon" />
        <div className="counter">5</div>
      </div>
      <div className="item">
        <ListOutlinedIcon className="icon" />
      </div>
      <div className="item">
        <img src={avatar} alt="Admin Panel" className="avatar" />
      </div>
      <div className="item">
        <SettingsOutlinedIcon className="icon" />
      </div>
    </div>
  );
}
