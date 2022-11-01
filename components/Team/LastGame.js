import { View, Text, Image } from "react-native";

import { useQuery } from "react-query";
import { useFonts, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { format } from "date-fns";

import { fetchLastGame } from "../../api/fetchLastGame";
import { ImageAssets } from "../../assets/ImageAssets";

import Loading from "../General/Loading";
import Error from "../General/Error";
import teams from "../../teams.json";

const LastGame = ({ teamID }) => {
    const [fontsLoaded] = useFonts({ Poppins_700Bold, Poppins_600SemiBold });
    const { data, isLoading, error } = useQuery("game", () => fetchLastGame(teamID));

    if (!fontsLoaded) return null;

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <View className="mb-10 px-6">
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="mb-3 text-2xl">
                Last Game
            </Text>

            <View className="flex flex-row items-center justify-center rounded-xl bg-white py-3">
                <View className="flex flex-row items-center">
                    <Image
                        className="w-16 h-16 mx-1"
                        source={ImageAssets[data[0].previousGameSchedule.dates[0].games[0].teams.away.team.id]}
                    />
                    <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-neutral-700">
                        {teams[data[0].previousGameSchedule.dates[0].games[0].teams.away.team.id].abbr}
                    </Text>
                </View>

                <View>
                    <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="mx-6 text-xl">
                        {data[0].previousGameSchedule.dates[0].games[0].teams.away.score}
                        <Text> - </Text>
                        {data[0].previousGameSchedule.dates[0].games[0].teams.home.score}
                    </Text>

                    <View className="bg-neutral-100 p-1 rounded-md w-16 mx-auto mt-2">
                        <Text className="text-center">
                            {format(new Date(data[0].previousGameSchedule.dates[0].date), "LLL d")}
                        </Text>
                    </View>
                </View>

                <View className="flex flex-row items-center">
                    <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-neutral-700">
                        {teams[data[0].previousGameSchedule.dates[0].games[0].teams.home.team.id].abbr}
                    </Text>

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
