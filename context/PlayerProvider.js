import React, { createContext, useState } from "react";
export const playerIDContext = createContext();

const PlayerProvider = (props) => {
    const [playerID, setPlayerID] = useState();

    return <playerIDContext.Provider value={[playerID, setPlayerID]}>{props.children}</playerIDContext.Provider>;
};

export default PlayerProvider;
