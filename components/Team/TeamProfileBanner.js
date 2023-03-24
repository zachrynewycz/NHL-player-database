import { View, Text, Image } from "react-native";
import { ImageAssets } from "../../assets/ImageAssets";
import { fetchTeamStats } from "../../api/fetchTeamStats";
import teams from "../../teams.json";
import usePoppinsFonts from "../../hooks/usePoppinsFonts";
import withDataFetching from "../shared/withDataFetching";

const TeamProfileBanner = ({ data, id }) => {
    const fontsLoaded = usePoppinsFonts();

    if (!fontsLoaded) return null;

    return (
        <View className="bg-white">
            <View className="flex flex-row py-5 items-center">
                <View style={{ backgroundColor: teams[id].primary }} className="mx-5 rounded-full w-20 h-20">
                    <Image className="w-20 h-20 mt-0.5" source={ImageAssets[id]} />
                </View>

                <View>
                    <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-center text-xl text-neutral-800">
                        {teams[id].name}
                    </Text>
                    <Text className="text-xs">{data[0].division.name} Division</Text>
                </View>
            </View>

            <View className="bg-neutral-200 h-[1]" />
        </View>
    );
};

export default withDataFetching(fetchTeamStats)(TeamProfileBanner);
