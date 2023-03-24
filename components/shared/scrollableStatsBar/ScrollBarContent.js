import { View, Text } from "react-native";
import usePoppinsFonts from "../../../hooks/usePoppinsFonts";

const ScrollBarContent = ({ heading, value }) => {
    const fontsLoaded = usePoppinsFonts();

    if (!fontsLoaded) return null;

    return (
        <View className="mx-5">
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="h-5.5 text-neutral-300">
                {heading}
            </Text>
            <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-xl text-neutral-700">
                {value}
            </Text>
        </View>
    );
};

export default ScrollBarContent;
