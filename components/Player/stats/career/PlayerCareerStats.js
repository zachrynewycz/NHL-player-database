import { View } from "react-native";
import { useQuery } from "react-query";
import { playerIDContext } from "../../../../context/PlayerProvider";
import { fetchPlayerStatsByYear } from "../../../../api/fetchPlayerStatsByYear";
import { useContext } from "react";
import SectionTitle from "../../../shared/SectionTitle";
import CareerStatsTable from "./CareerStatsTable";

const PlayerCareerStats = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading } = useQuery("careerStats", () => fetchPlayerStatsByYear(playerID));

    if (isLoading) return null;

    return (
        <View className="px-5">
            <SectionTitle title="Career Stats" />
            <CareerStatsTable data={data} isGoalie={false} />
        </View>
    );
};

export default PlayerCareerStats;
