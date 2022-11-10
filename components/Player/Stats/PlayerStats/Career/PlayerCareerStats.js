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

const PlayerCareerStats = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading } = useQuery("careerStats", () => fetchPlayerStatsByYear(playerID));

    if (isLoading) return <Loading />;

    return (
        <View className="px-5">
            <SectionTitle title="Full Statistics" />

            <ScrollView className="h-80 mb-20">
                <Header />
                {data[0].splits?.map((season, index) => (
                    <>
                        {season.league.name === "National Hockey League" && (
                            <View key={index} className="flex flex-row border-b-[1px] border-neutral-100 bg-white">
                                <CareerStatValue value={season.season?.slice(0, 4)} />
                                <CareerStatValue value={teams[season.team.id].abbr} />
                                <CareerStatValue value={season.stat.games} />
                                <CareerStatValue value={season.stat.goals} />
                                <CareerStatValue value={season.stat.assists} />
                                <CareerStatValue value={season.stat.points} />
                                <CareerStatValue value={season.stat.plusMinus} />
                            </View>
                        )}
                    </>
                ))}
            </ScrollView>
        </View>
    );
};

export default PlayerCareerStats;
