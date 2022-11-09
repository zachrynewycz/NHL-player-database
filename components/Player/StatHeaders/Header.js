import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { View, Text } from "react-native";

const Header = ({ isGoalie = false, headingText, headingColor }) => {
    const PLAYER_LABELS = ["G", "A", "P", "+/-", "PM"];
    const GOALIE_LABELS = ["W", "L", "SO", "SAVES", "S%"];
    const [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_600SemiBold });

    if (!fontsLoaded) return null;

    return (
        <View className="mx-6">
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-xl">
                {headingText}
            </Text>

            <View
                style={{ backgroundColor: headingColor }}
                className="flex flex-row items-center py-2.5 justify-around rounded-t-md mt-2"
            >
                {isGoalie
                    ? GOALIE_LABELS.map((label) => (
                          <Text key={label} style={{ fontFamily: "Poppins_500Medium" }} className="text-white">
                              {label}
                          </Text>
                      ))
                    : PLAYER_LABELS.map((label) => (
                          <Text key={label} style={{ fontFamily: "Poppins_500Medium" }} className="text-white">
                              {label}
                          </Text>
                      ))}
            </View>
        </View>
    );
};

export default Header;
