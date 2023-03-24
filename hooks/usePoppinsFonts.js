import {
    useFonts,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
} from "@expo-google-fonts/poppins";

const usePoppinsFonts = () => {
    const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold });
    return fontsLoaded;
};

export default usePoppinsFonts;
