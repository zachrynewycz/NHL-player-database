import { View, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { playerIDContext } from "../../../../../context/PlayerProvider";
import { fetchPlayerStatsByYear } from "../../../../../api/fetchPlayerStatsByYear";
import { useContext } from "react";
import SectionTitle from "../../../../General/SectionTitle";
import CareerStatValue from "./CareerStatValue";
import Loading from "../../../../General/Loading";
import teams from "../../../../../teams.json";
import Header from "./Header";

const GoalieCareerStats = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading } = useQuery("careerStats", () => fetchPlayerStatsByYear(playerID));

    if (isLoading) return <Loading />;

    return (
        <View className="mx-5">
            <SectionTitle title="Full Statistics" />

            <Header />
            <ScrollView className="h-80 mb-20">
                {data[0].splits?.map((season, index) => (
                    <>
                        {season.league.name === "National Hockey League" && (
                            <View key={index} className="flex flex-row border-b-[1px] border-neutral-100 bg-white">
                                <CareerStatValue value={season.season?.slice(0, 4)} />
                                <CareerStatValue value={teams[season.team.id].abbr} />
                                <CareerStatValue value={season.stat.games} />
                                <CareerStatValue value={season.stat.wins} />
                                <CareerStatValue value={season.stat.losses} />
                                <CareerStatValue value={season.stat.saves} />
                                <CareerStatValue value={season.stat.savePercentage?.toFixed(3)} />
                            </View>
                        )}
                    </>
                ))}
            </ScrollView>
        </View>
    );
};

export default GoalieCareerStats;
