import Values from "./Values";
import Header from "../StatHeaders/Header";
import format from "date-fns/format";
import teams from "../../../teams.json";
import { useContext } from "react";
import { teamIDContext } from "../../../context/TeamProvider";

const CurrentPlayerStats = () => {
    const [teamID] = useContext(teamIDContext);

    return (
        <>
            <Header headingText={`${format(new Date(), "RRRR")} Stats`} headingColor={teams[teamID].primary} />
            <Values />
        </>
    );
};

export default CurrentPlayerStats;
