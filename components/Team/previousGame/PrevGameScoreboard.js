import { View, Text, Image } from "react-native";
import { ImageAssets } from "../../../assets/ImageAssets";
import { format } from "date-fns";
import teams from "../../../teams.json";
import SectionTitle from "../../shared/SectionTitle";

const PrevGameScoreboard = ({ data }) => {
    return (
        <View className="px-5">
            <SectionTitle title="Previous" />

            <View className="flex flex-row items-center justify-center rounded-lg bg-white py-3">
                {/* Away team */}
                <View className="flex flex-row items-center">
                    <Image
                        className="w-16 h-16 mr-1"
                        source={ImageAssets[data[0].previousGameSchedule.dates[0].games[0].teams.away.team.id]}
                    />
                    <Text>{teams[data[0].previousGameSchedule.dates[0].games[0].teams.away.team.id].abbr}</Text>
                </View>

                {/* Scores */}
                <View className="mx-5">
                    <Text className="text-xl text-center font-semibold">
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

                {/* Home team */}
                <View className="flex flex-row items-center">
                    <Text>{teams[data[0].previousGameSchedule.dates[0].games[0].teams.home.team.id].abbr}</Text>
                    <Image
                        className="w-16 h-16 ml-1"
                        source={ImageAssets[data[0].previousGameSchedule.dates[0].games[0].teams.home.team.id]}
                    />
                </View>
            </View>
        </View>
    );
};

export default PrevGameScoreboard;
