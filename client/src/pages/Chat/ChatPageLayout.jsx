import React from "react";
import ChatArea from "./ChatArea";
import { useSelector,useDispatch } from "react-redux";

function ChatPageLayout() {
  const { isSideBarCollapsed } = useSelector((state) => state.localState);

  // Sidebar width depends on collapse state
  const sidebarWidth = isSideBarCollapsed ? 40 : 120;


  return (
    <div className="w-full h-full overflow-hidden flex">
      <div className="w-full h-full p-2">
        <ChatArea />
      </div>
      <div className="h-full w-44">Suggesttion</div>
    </div>
  );
}

export default ChatPageLayout;
