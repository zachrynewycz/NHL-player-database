import { View, Text } from "react-native";
import { useQuery } from "react-query";
import { useContext } from "react";
import { playerIDContext } from "../../../context/PlayerProvider";
import { fetchCurrentYearPlayerStats } from "../../../api/fetchCurrentYearPlayerStats";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

const Values = () => {
    const [playerID] = useContext(playerIDContext);
    const [fontsLoaded] = useFonts({ Poppins_600SemiBold });
    const { data } = useQuery("currentStats", () => fetchCurrentYearPlayerStats(playerID));

    if (!fontsLoaded) return null;

    return (
        <View className="flex flex-row justify-around py-2 rounded-b-md mx-6 bg-white">
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.wins}
            </Text>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.losses}
            </Text>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.shutouts}
            </Text>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.saves}
            </Text>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.savePercentage}
            </Text>
        </View>
    );
};

export default Values;
