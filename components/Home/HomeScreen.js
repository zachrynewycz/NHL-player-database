import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import TeamSelection from "./TeamSelection";
import { teamIDContext } from "../../context/TeamProvider";
import { useContext } from "react";

const HomeScreen = () => {
    const [teamID] = useContext(teamIDContext);
    const [fontsLoaded] = useFonts({ Poppins_700Bold });
    const nav = useNavigation();

    if (!fontsLoaded) return null;

    const goToTeamPage = () => {
        nav.navigate("Team");
    };

    return (
        <SafeAreaView>
            <View className="left-7 mt-10 mb-5">
                <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl text-[#131313]">
                    Choose your team
                </Text>
                <View className="w-16 mt-2 h-1 bg-[#131313]" />
            </View>

            <TeamSelection />

            <TouchableOpacity disabled={!teamID} onPress={goToTeamPage}>
                <Text className="bg-[#131313] text-white font-semibold text-center text-xl w-[90%] mx-auto py-3">Go</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default HomeScreen;
