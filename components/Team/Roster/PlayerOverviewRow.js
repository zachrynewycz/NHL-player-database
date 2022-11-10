import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { useContext } from "react";
import { playerIDContext } from "../../../context/PlayerProvider";

const PlayerOverviewRow = ({ player }) => {
    const nav = useNavigation();
    const [playerID, setPlayerID] = useContext(playerIDContext);
    const [fontsLoaded] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });

    if (!fontsLoaded) return null;

    const goToPlayerPage = () => {
        setPlayerID(player.person.id);
        nav.navigate("Player", {
            isGoalie: player.position.abbreviation === "G",
        });
    };

    return (
        <TouchableOpacity onPress={goToPlayerPage}>
            <View className="flex flex-row items-center p-3 border-b-[1px] border-neutral-100">
                <View className="w-3/4 flex flex-row items-center">
                    <Image
                        className="w-10 h-10 rounded-full border-[0.5px] border-neutral-400"
                        source={{
                            uri: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}@3x.png`,
                        }}
                    />
                    <Text className="ml-4 font-medium">{player.person.fullName}</Text>
                </View>

                <View className="flex flex-row justify-around w-1/4 items-center">
                    <Text className="text-base font-semibold">{player.jerseyNumber}</Text>
                    <Text className="text-base font-semibold">{player.position.abbreviation}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PlayerOverviewRow;
