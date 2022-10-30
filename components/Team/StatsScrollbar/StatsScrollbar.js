import { ScrollView, Text } from "react-native";
import { useQuery } from "react-query";
import { fetchTeamStats } from "../../../api/fetchTeamStats";
import SingleStat from "./SingleStat";

const StatsScrollbar = ({ teamID }) => {
    const { data, isLoading } = useQuery("stats", () => fetchTeamStats(teamID));

    if (isLoading) return <Text>Loading...</Text>;

    return (
        <ScrollView horizontal className="px-5 py-4 mb-8 bg-white">
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

export default StatsScrollbar;
