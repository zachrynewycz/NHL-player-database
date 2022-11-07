import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useContext } from "react";
import { playerIDContext } from "../../../context/PlayerProvider";

const PlayerOverviewRow = ({ player }) => {
    const nav = useNavigation();
    const [playerID, setPlayerID] = useContext(playerIDContext);
    const [fontsLoaded] = useFonts({ Poppins_600SemiBold, Poppins_700Bold });

    if (!fontsLoaded) return null;

    const goToPlayerPage = () => {
        setPlayerID(player.person.id);
        nav.navigate("Player", {
            isGoalie: player.position.abbreviation === "G",
        });
    };

    return (
        <TouchableOpacity onPress={goToPlayerPage}>
            <View className="flex flex-row items-center py-3.5 px-3">
                <View className="w-3/4 flex flex-row items-center ">
                    <Image
                        className="w-10 h-10 rounded-full bg-neutral-50"
                        source={{
                            uri: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}@3x.png`,
                        }}
                    />
                    <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="ml-4">
                        {player.person.fullName}
                    </Text>
                </View>

                <View className="flex flex-row justify-around w-1/4 items-center">
                    <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-base text-neutral-500">
                        {player.jerseyNumber}
                    </Text>
                    <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-base text-neutral-500">
                        {player.position.abbreviation}
                    </Text>
                </View>
            </View>
            <View className="absolute bottom-0 w-full h-[1] bg-neutral-200" />
        </TouchableOpacity>
    );
};

export default PlayerOverviewRow;
