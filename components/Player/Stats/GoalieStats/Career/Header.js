import { Text, View } from "react-native";

const Header = () => {
    const LABELS = ["YEAR", "TEAM", "GP", "W", "L", "S", "S%"];

    return (
        <View className="flex flex-row bg-neutral-800 py-3 rounded-t-md px-1">
            {LABELS.map((label) => (
                <Text key={label} className="w-12 text-white text-center text-xs">
                    {label}
                </Text>
            ))}
        </View>
    );
};

export default Header;
