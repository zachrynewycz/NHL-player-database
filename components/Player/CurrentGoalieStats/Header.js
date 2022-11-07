import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { View, Text } from "react-native";
import { format } from "date-fns";
import { teamIDContext } from "../../../context/TeamProvider";
import { useContext } from "react";
import teams from "../../../teams.json";

const Header = () => {
    const [teamID] = useContext(teamIDContext);
    const [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_600SemiBold });
    const LABELS = ["W", "L", "SO", "SAVES", "SAVE%"];

    if (!fontsLoaded) return null;

    return (
        <View className="mx-6">
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-xl">
                {format(new Date(), "RRRR")} Stats
            </Text>

            <View
                style={{ backgroundColor: teams[teamID].primary }}
                className="flex flex-row items-center py-2.5 justify-around rounded-t-md mt-2"
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
