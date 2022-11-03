import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { View, Text } from "react-native";
import teams from "../../../teams.json";
import { format } from "date-fns";

const Header = () => {
    const [fontsLoaded] = useFonts({ Poppins_500Medium });
    const LABELS = ["G", "A", "P", "+/-", "PIM", "S%", "GP"];

    if (!fontsLoaded) return null;

    return (
        <View className="mx-6">
            <Text style={{ fontFamily: "Poppins_500Medium" }} className="text-lg">
                {format(new Date(), "RRRR")} Stats
            </Text>

            <View
                style={{ backgroundColor: teams[19].primary }}
                className="flex flex-row items-center py-3 justify-evenly rounded-t-xl mt-2"
            >
                {LABELS.map((label) => (
                    <Text key={label} style={{ fontFamily: "Poppins_500Medium" }} className="text-white">
                        {label}
                    </Text>
                ))}
            </View>
        </View>
    );
};

export default Header;
