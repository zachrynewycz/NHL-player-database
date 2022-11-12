import { useQuery } from "react-query";
import { fetchLastGame } from "../../../api/fetchLastGame";
import { teamIDContext } from "../../../context/TeamProvider";
import { useContext } from "react";
import Loading from "../../General/Loading";
import Error from "../../General/Error";
import Scoreboard from "./Scoreboard";
import Recap from "./Recap/Recap";
import SectionBreak from "../../General/SectionBreak";

const LastGame = () => {
    const [teamID] = useContext(teamIDContext);
    const { data, isLoading, error } = useQuery("lastGame", () => fetchLastGame(teamID));

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <>
            <Scoreboard data={data} />
            <SectionBreak />
            <Recap
                gameID={data[0].previousGameSchedule.dates[0].games[0].gamePk}
                key={data[0].previousGameSchedule.dates[0].games[0].gamePk}
            />
        </>
    );
};

export default LastGame;
