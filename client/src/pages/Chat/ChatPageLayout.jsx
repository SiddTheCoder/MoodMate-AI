import React from "react";
import ChatArea from "./ChatArea";
import { useSelector, useDispatch } from "react-redux";
import SuggestionBox from "./SuggestionBox";

function ChatPageLayout() {
  const {user} = useSelector((state) => state.user);
  const { isSideBarCollapsed, isSuggestionBoxOpen } = useSelector(
    (state) => state.localState
  );

  // Sidebar width depends on collapse state
  const sidebarWidth = isSideBarCollapsed ? 40 : 120;

  // SuggestionBox width depends on open state
  const suggestionBoxWidth = isSuggestionBoxOpen ? 320 : 48; // 80 * 4 = 320px for wide, 12 * 4 = 48px for condensed

  React.useEffect(() => {
    if (user === null) {
      window.location.href = "/login";
    }
  }, [user]);

  return (
    <div className="w-full h-full overflow-hidden flex">
      <div className="w-full h-full py-2 pr-2">
        <ChatArea />
      </div>

      {isSuggestionBoxOpen && (
        <div className="w-1 h-full flex items-center">
          <div className="border-l-2 border-gray-300 h-full rounded-full"></div>
        </div>
      )}

      <div
        className="h-full transition-all duration-300 ease-in-out"
        style={{ width: `${suggestionBoxWidth}px` }}
      >
        <SuggestionBox />
      </div>
    </div>
  );
}

export default ChatPageLayout;
