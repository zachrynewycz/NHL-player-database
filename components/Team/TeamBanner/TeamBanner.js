import { View, Text, Image } from "react-native";
import { ImageAssets } from "../../../assets/ImageAssets";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { teamIDContext } from "../../../context/TeamProvider";
import { useContext } from "react";
import { useQuery } from "react-query";
import { fetchTeamStats } from "../../../api/fetchTeamStats";
import teams from "../../../teams.json";
import Loading from "../../General/Loading";

const TeamBanner = () => {
    const [fontLoaded] = useFonts({ Poppins_700Bold });
    const [teamID] = useContext(teamIDContext);
    const { data, isLoading } = useQuery("teamStats", () => fetchTeamStats(teamID));

    if (!fontLoaded) return null;

    if (isLoading) return <Loading />;

    return (
        <View className="bg-white">
            <View className="flex flex-row py-5 items-center">
                <View style={{ backgroundColor: teams[teamID].primary }} className="mx-5 rounded-full w-20 h-20">
                    <Image className="w-20 h-20 mt-0.5" source={ImageAssets[teamID]} />
                </View>

                <View>
                    <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-center text-xl text-neutral-800">
                        {teams[teamID].name}
                    </Text>
                    <Text className="text-xs">{data[0].division.name} Division</Text>
                </View>
            </View>

            <View className="bg-neutral-200 h-[1]" />
        </View>
    );
};

export default TeamBanner;
