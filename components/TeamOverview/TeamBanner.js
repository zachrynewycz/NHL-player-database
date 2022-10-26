import { View, Text, Image } from "react-native";
import teams from "../../teams.json";
import { ImageAssets } from "../../assets/ImageAssets";
import BackButton from "../General/BackButton";

const TeamBanner = ({ teamID }) => {
    return (
        <View>
            <BackButton />
            <View>
                {teamID && (
                    <>
                        <Image source={ImageAssets[teamID]} />
                        <Text>{teams[teamID].name}</Text>
                    </>
                )}
            </View>
        </View>
    );
};

export default TeamBanner;
