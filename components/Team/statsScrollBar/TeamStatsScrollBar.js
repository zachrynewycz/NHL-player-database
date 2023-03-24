import { fetchTeamStats } from "../../../api/fetchTeamStats";
import ScrollBar from "../../shared/scrollableStatsBar/ScrollBar";
import ScrollBarContent from "../../shared/scrollableStatsBar/ScrollBarContent";
import withDataFetching from "../../shared/withDataFetching";

const TeamStatsScrollBar = ({ data }) => {
    return (
        <ScrollBar>
            <ScrollBarContent heading="Wins" value={data[0].teamStats[0].splits[0].stat.wins} />
            <ScrollBarContent heading="Losses" value={data[0].teamStats[0].splits[0].stat.losses} />
            <ScrollBarContent heading="OT" value={data[0].teamStats[0].splits[0].stat.ot} />
            <ScrollBarContent heading="Points" value={data[0].teamStats[0].splits[0].stat.pts} />
            <ScrollBarContent heading="Standing" value={data[0].teamStats[0].splits[1].stat.pts} />
            <ScrollBarContent heading="PP Rank" value={data[0].teamStats[0].splits[1].stat.powerPlayPercentage} />
            <ScrollBarContent heading="PK Rank" value={data[0].teamStats[0].splits[1].stat.penaltyKillPercentage} />
        </ScrollBar>
    );
};

export default withDataFetching(fetchTeamStats)(TeamStatsScrollBar);
