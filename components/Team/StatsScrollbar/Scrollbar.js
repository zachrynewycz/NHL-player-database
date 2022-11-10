import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { fetchTeamStats } from "../../../api/fetchTeamStats";
import { teamIDContext } from "../../../context/TeamProvider";
import { useContext } from "react";
import SingleStat from "./SingleStat";
import Loading from "../../General/Loading";

const Scrollbar = () => {
    const [teamID] = useContext(teamIDContext);
    const { data, isLoading } = useQuery("stats", () => fetchTeamStats(teamID));

    if (isLoading) return <Loading />;

    return (
        <ScrollView horizontal className="px-5 py-2 mb-8 bg-white">
            <SingleStat heading="Wins" value={data[0].teamStats[0].splits[0].stat.wins} />
            <SingleStat heading="Losses" value={data[0].teamStats[0].splits[0].stat.losses} />
            <SingleStat heading="OT" value={data[0].teamStats[0].splits[0].stat.ot} />
            <SingleStat heading="Points" value={data[0].teamStats[0].splits[0].stat.pts} />
            <SingleStat heading="Standing" value={data[0].teamStats[0].splits[1].stat.pts} />
            <SingleStat heading="PP Rank" value={data[0].teamStats[0].splits[1].stat.powerPlayPercentage} />
            <SingleStat heading="PK Rank" value={data[0].teamStats[0].splits[1].stat.penaltyKillPercentage} />
        </ScrollView>
    );
};

export default Scrollbar;
