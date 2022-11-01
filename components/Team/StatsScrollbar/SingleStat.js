import { useFonts, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { View, Text } from "react-native";

const SingleStat = ({ heading, value }) => {
    const [fontsLoaded] = useFonts({ Poppins_700Bold, Poppins_600SemiBold });

    if (!fontsLoaded) return null;

    return (
        <View className="mx-5">
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="h-5.5 text-neutral-300">
                {heading}
            </Text>
            <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-xl text-neutral-800">
                {value}
            </Text>
        </View>
    );
};

export default SingleStat;
