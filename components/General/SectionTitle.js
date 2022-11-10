import { View, Text } from "react-native";
import { useContext } from "react";
import { teamIDContext } from "../../context/TeamProvider";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import teams from "../../teams.json";

const SectionTitle = ({ title }) => {
    const [teamID] = useContext(teamIDContext);
    const [fontsLoaded] = useFonts({ Poppins_600SemiBold });

    if (!fontsLoaded) return null;

    return (
        <View className="flex flex-row">
            <View style={{ borderColor: teams[teamID].primary }} className="border-l-4 h-4 mt-1.5" />
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="mb-3 text-xl pl-2">
                {title}
            </Text>
        </View>
    );
};

export default SectionTitle;
