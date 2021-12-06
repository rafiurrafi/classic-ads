import React from "react";
import SidebarProfile from "../sidebarProfile";
const AdListPage = ({ isOpenAside, onOpenAside }) => {
  return (
    <div>
      <SidebarProfile isOpenAside={isOpenAside} onOpenAside={onOpenAside} />
    </div>
  );
};

export default AdListPage;
