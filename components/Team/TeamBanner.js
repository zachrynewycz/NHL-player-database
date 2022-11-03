import { View, Text, Image } from "react-native";
import teams from "../../teams.json";
import { ImageAssets } from "../../assets/ImageAssets";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { teamIDContext } from "../../context/TeamProvider";
import { useContext } from "react";

const TeamBanner = () => {
    const [fontLoaded] = useFonts({ Poppins_700Bold });
    const [teamID] = useContext(teamIDContext);

    if (!fontLoaded) return null;

    return (
        <View className="relative bg-white">
            <Image className="mx-auto w-44 h-44 mt-10 mb-[-10]" source={ImageAssets[teamID]} />
            <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-center text-2xl text-neutral-800">
                {teams[teamID].name}
            </Text>
            <View className="w-full bg-neutral-200 h-[1] mt-3" />
        </View>
    );
};

export default TeamBanner;
