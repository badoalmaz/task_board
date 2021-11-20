import React, { FC } from "react";

import CreateNewList from "./CreateNewList";
import Lists from "./Lists";
import SelectList from "./SelectList";

const Sidebar: FC = () => {
  return (
    <div className="column is-3">
      <CreateNewList />
      <Lists />
      {/* <SelectList /> */}
    </div>
  );
};

export default Sidebar;
