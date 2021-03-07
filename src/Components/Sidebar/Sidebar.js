import React from "react";
import "./Sidebar.css";
import SidebarRow from "../SidebarRow/SidebarRow";

// Material UI Imports
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/authAction";

function Sidebar() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());
  };
  return (
    <div className="Sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={SlideshowIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
      <br />
      <br />
      <SidebarRow
        Icon={ExitToAppIcon}
        title="Log Out"
        onClick={logOutHandler}
      />
    </div>
  );
}

export default Sidebar;
