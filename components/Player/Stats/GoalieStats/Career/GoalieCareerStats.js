import { View } from "react-native";
import { useQuery } from "react-query";
import { playerIDContext } from "../../../../../context/PlayerProvider";
import { fetchPlayerStatsByYear } from "../../../../../api/fetchPlayerStatsByYear";
import { useContext } from "react";
import SectionTitle from "../../../../General/SectionTitle";
import Loading from "../../../../General/Loading";
import StatTable from "./StatTable";
import Error from "../../../../General/Error";

const GoalieCareerStats = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading, isError } = useQuery("careerStats", () => fetchPlayerStatsByYear(playerID));

    if (isLoading) return <Loading />;

    if (isError) return <Error />;

    return (
        <View className="px-5">
            <SectionTitle title="Career Stats" />
            <StatTable data={data} />
        </View>
    );
};

export default GoalieCareerStats;
