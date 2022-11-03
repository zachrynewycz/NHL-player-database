import React, { createContext, useState } from "react";
export const teamIDContext = createContext();

const TeamProvider = (props) => {
    const [teamID, setTeamID] = useState();

    return <teamIDContext.Provider value={[teamID, setTeamID]}>{props.children}</teamIDContext.Provider>;
};

export default TeamProvider;
