import React, { useContext } from "react";

import { UserContext, ChannelContext } from "../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
      {/* <componentF /> */}
    </div>
  );
};

export default ComponentE;
