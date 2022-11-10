import { View } from "react-native";
import { useQuery } from "react-query";
import { useContext } from "react";
import { playerIDContext } from "../../../../../context/PlayerProvider";
import { fetchCurrentYearPlayerStats } from "../../../../../api/fetchCurrentYearPlayerStats";
import Loading from "../../../../General/Loading";
import Stat from "../../Stat";
import SectionTitle from "../../../../General/SectionTitle";
import { format } from "date-fns";

const PlayerCurrentStats = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading } = useQuery("currentStats", () => fetchCurrentYearPlayerStats(playerID));

    if (isLoading) return <Loading />;

    return (
        <View className="px-5 mb-16">
            <SectionTitle title={`${format(new Date(), "RRRR")} Stats`} />

            <View className="flex flex-row justify-around px-2">
                <Stat statName="GP" value={data[0].splits[0].stat.games} />
                <Stat statName="G" value={data[0].splits[0].stat.goals} />
                <Stat statName="A" value={data[0].splits[0].stat.assists} />
                <Stat statName="P" value={data[0].splits[0].stat.points} />
                <Stat statName="+/-" value={data[0].splits[0].stat.plusMinus} />
                <Stat statName="TOI/G" value={data[0].splits[0].stat.timeOnIcePerGame} />
                <Stat statName="PM" value={data[0].splits[0].stat.penaltyMinutes} />
            </View>
        </View>
    );
};

export default PlayerCurrentStats;
