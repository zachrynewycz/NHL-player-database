import { View } from "react-native";
import { useQuery } from "react-query";
import { useContext } from "react";
import { playerIDContext } from "../../../../../context/PlayerProvider";
import { fetchCurrentYearPlayerStats } from "../../../../../api/fetchCurrentYearPlayerStats";
import Loading from "../../../../General/Loading";
import Stat from "../../Stat";
import SectionTitle from "../../../../General/SectionTitle";
import { format } from "date-fns";

const GoalieCurrentStats = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading } = useQuery("currentStats", () => fetchCurrentYearPlayerStats(playerID));

    if (isLoading) return <Loading />;

    return (
        <View className="mb-16 mx-5">
            <SectionTitle title={`${format(new Date(), "RRRR")} Stats`} />

            <View className="flex flex-row justify-around px-2">
                <Stat statName="W" value={data[0].splits[0].stat.wins} />
                <Stat statName="L" value={data[0].splits[0].stat.losses} />
                <Stat statName="S%" value={data[0].splits[0].stat.savePercentage?.toFixed(3)} />
                <Stat statName="SAVES" value={data[0].splits[0].stat.saves} />
                <Stat statName="SO" value={data[0].splits[0].stat.shutouts} />
                <Stat statName="GP" value={data[0].splits[0].stat.games} />
            </View>
        </View>
    );
};

export default GoalieCurrentStats;
