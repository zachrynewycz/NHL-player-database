import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import TeamSelection from "./TeamSelection";

const HomeScreen = () => {
    const [selectedTeamID, setSelectedTeamID] = useState();
    const [fontsLoaded] = useFonts({ Poppins_700Bold });
    const nav = useNavigation();

    if (!fontsLoaded) {
        return null;
    }

    const goToTeamPage = () => {
        nav.navigate("Team", {
            id: selectedTeamID,
        });
    };

    return (
        <>
            <View className="relative top-20 left-7 mb-5">
                <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl text-[#131313]">
                    Choose your team
                </Text>
                <View className="w-16 mt-2 h-1 bg-[#131313]" />
            </View>

            <TeamSelection selectedTeamID={selectedTeamID} setSelectedTeamID={setSelectedTeamID} />

            <TouchableOpacity disabled={selectedTeamID === null} onPress={goToTeamPage}>
                <Text className="bg-[#131313] text-white font-semibold text-center text-xl w-[90%] mx-auto mb-10 py-3">Go</Text>
            </TouchableOpacity>
        </>
    );
};

export default HomeScreen;
