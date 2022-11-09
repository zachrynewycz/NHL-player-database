import Header from "../StatHeaders/Header";
import Values from "./Values";
import format from "date-fns/format";
import teams from "../../../teams.json";
import { useContext } from "react";
import { teamIDContext } from "../../../context/TeamProvider";

const CurrentGoalieStats = () => {
    const [teamID] = useContext(teamIDContext);

    return (
        <>
            <Header isGoalie={true} headingText={`${format(new Date(), "RRRR")} Stats`} headingColor={teams[teamID].primary} />
            <Values />
        </>
    );
};

export default CurrentGoalieStats;
