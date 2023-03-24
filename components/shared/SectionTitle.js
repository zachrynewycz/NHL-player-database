import { View, Text } from "react-native";
import { useContext } from "react";
import { teamIDContext } from "../../context/TeamProvider";
import teams from "../../teams.json";
import usePoppinsFonts from "../../hooks/usePoppinsFonts";

const SectionTitle = ({ title }) => {
    const [teamID] = useContext(teamIDContext);
    const fontsLoaded = usePoppinsFonts();

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
