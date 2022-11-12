import { useQuery } from "react-query";
import { fetchTeamStats } from "../../../api/fetchTeamStats";
import { teamIDContext } from "../../../context/TeamProvider";
import { useContext } from "react";
import Loading from "../../General/Loading";
import ScrollBar from "../../General/StatScrollBar/ScrollBar";
import ScrollItem from "../../General/StatScrollBar/ScrollItem";

const Scrollbar = () => {
    const [teamID] = useContext(teamIDContext);
    const { data, isLoading } = useQuery("stats", () => fetchTeamStats(teamID));

    if (isLoading) return <Loading />;

    return (
        <ScrollBar>
            <ScrollItem heading="Wins" value={data[0].teamStats[0].splits[0].stat.wins} />
            <ScrollItem heading="Losses" value={data[0].teamStats[0].splits[0].stat.losses} />
            <ScrollItem heading="OT" value={data[0].teamStats[0].splits[0].stat.ot} />
            <ScrollItem heading="Points" value={data[0].teamStats[0].splits[0].stat.pts} />
            <ScrollItem heading="Standing" value={data[0].teamStats[0].splits[1].stat.pts} />
            <ScrollItem heading="PP Rank" value={data[0].teamStats[0].splits[1].stat.powerPlayPercentage} />
            <ScrollItem heading="PK Rank" value={data[0].teamStats[0].splits[1].stat.penaltyKillPercentage} />
        </ScrollBar>
    );
};

export default Scrollbar;
