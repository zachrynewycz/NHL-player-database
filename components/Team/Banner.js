import { View, Text, Image } from "react-native";
import teams from "../../teams.json";
import { ImageAssets } from "../../assets/ImageAssets";

const TeamBanner = ({ teamID }) => {
    return (
        <View className="relative mb-2">
            <Image className="mx-auto w-44 h-44 mt-10 mb-[-10]" source={ImageAssets[teamID]} />
            <Text className="text-center">{teams[teamID].name}</Text>
        </View>
    );
};

export default TeamBanner;
