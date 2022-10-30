import { View, Text, Image } from "react-native";
import { useQuery } from "react-query";
import { fetchLastGame } from "../../api/fetchLastGame";
import teams from "../../teams.json";
import { ImageAssets } from "../../assets/ImageAssets";

const LastGame = ({ teamID }) => {
    const { data, isLoading } = useQuery("game", () => fetchLastGame(teamID));

    if (isLoading) return <Text>Loading...</Text>;

    return (
        <View className="mb-10 px-7">
            <Text className="mb-3 text-lg">Last game</Text>
            <View className="flex flex-row items-center justify-center rounded-xl bg-white py-2">
                <View className="flex flex-row items-center">
                    <Image
                        className="w-16 h-16 mx-1"
                        source={ImageAssets[data[0].previousGameSchedule.dates[0].games[0].teams.away.team.id]}
                    />
                    <Text>{teams[data[0].previousGameSchedule.dates[0].games[0].teams.away.team.id].abbr}</Text>
                </View>

                <Text className="mx-6 text-xl -tracking-tighter font-semibold">
                    {data[0].previousGameSchedule.dates[0].games[0].teams.away.score}
                    <Text> - </Text>
                    {data[0].previousGameSchedule.dates[0].games[0].teams.home.score}
                </Text>

                <View className="flex flex-row items-center">
                    <Text>{teams[data[0].previousGameSchedule.dates[0].games[0].teams.home.team.id].abbr}</Text>
                    <Image
                        className="w-16 h-16 mx-1"
                        source={ImageAssets[data[0].previousGameSchedule.dates[0].games[0].teams.home.team.id]}
                    />
                </View>
            </View>
        </View>
    );
};

export default LastGame;
