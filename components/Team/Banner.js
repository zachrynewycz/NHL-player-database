import { View, Text, Image } from "react-native";
import teams from "../../teams.json";
import { ImageAssets } from "../../assets/ImageAssets";

const TeamBanner = ({ teamID }) => {
    return (
        <View className="relative bg-white">
            <Image className="mx-auto w-44 h-44 mt-10 mb-[-10]" source={ImageAssets[teamID]} />
            <Text className="text-center text-2xl">{teams[teamID].name}</Text>
            <View className="w-full bg-neutral-300 h-[1] mt-5" />
        </View>
    );
};

export default TeamBanner;
