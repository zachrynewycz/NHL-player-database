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
        <View className="px-5">
            <SectionTitle title={`${format(new Date(), "RRRR")} Season`} />

            <View className="flex flex-row justify-around -my-3">
                <Stat statName="GP" value={data[0].splits[0].stat.games} />
                <Stat statName="G" value={data[0].splits[0].stat.goals} />
                <Stat statName="A" value={data[0].splits[0].stat.assists} />
                <Stat statName="P" value={data[0].splits[0].stat.points} />
                <Stat statName="+/-" value={data[0].splits[0].stat.plusMinus} />
            </View>
        </View>
    );
};

export default PlayerCurrentStats;
