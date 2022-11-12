import { Text, View } from "react-native";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

const Header = () => {
    const [fontsLoaded] = useFonts({ Poppins_500Medium });

    if (!fontsLoaded) return null;

    return (
        <View className="flex flex-row items-center py-3 bg-neutral-800 rounded-t-lg">
            <View className="w-3/4">
                <Text style={{ fontFamily: "Poppins_500Medium" }} className="ml-4 text-white">
                    Player
                </Text>
            </View>

            <View className="flex flex-row justify-around items-center w-1/4">
                <Text style={{ fontFamily: "Poppins_500Medium" }} className="text-white">
                    #
                </Text>
                <Text style={{ fontFamily: "Poppins_500Medium" }} className="text-white mr-3">
                    Pos
                </Text>
            </View>
        </View>
    );
};

export default Header;
