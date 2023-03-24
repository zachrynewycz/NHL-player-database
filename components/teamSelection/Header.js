import { Text, View } from "react-native";
import usePoppinsFonts from "../../hooks/usePoppinsFonts";

const Header = () => {
    const fontsLoaded = usePoppinsFonts();

    if (!fontsLoaded) return null;

    return (
        <View className="left-7 mt-10 mb-5">
            <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-3xl text-[#131313]">
                Choose your team
            </Text>
            <View className="w-16 mt-2 h-1 bg-[#131313]" />
        </View>
    );
};

export default Header;
