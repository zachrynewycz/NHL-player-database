import { View, Text } from "react-native";
import { useQuery } from "react-query";
import { useContext } from "react";
import { playerIDContext } from "../../../context/PlayerProvider";
import { fetchCurrentYearPlayerStats } from "../../../api/fetchCurrentYearPlayerStats";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import Loading from "../../General/Loading";

const Values = () => {
    const [playerID] = useContext(playerIDContext);
    const [fontsLoaded] = useFonts({ Poppins_600SemiBold });
    const { data, isLoading } = useQuery("currentStats", () => fetchCurrentYearPlayerStats(playerID));

    if (!fontsLoaded) return null;

    if (isLoading) return <Loading />;

    return (
        <View className="flex flex-row justify-around py-2 rounded-b-md mx-6 bg-white">
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.goals || 0}
            </Text>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.assists || 0}
            </Text>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.points || 0}
            </Text>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.plusMinus || 0}
            </Text>
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-base">
                {data[0].splits[0].stat.pim || 0}
            </Text>
        </View>
    );
};

export default Values;
