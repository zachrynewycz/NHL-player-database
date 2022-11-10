import { View, Text } from "react-native";

const Stat = ({ value, statName }) => {
    return (
        <View>
            <View className="bg-neutral-800 px-6 py-2 rounded-t-md">
                <Text className="text-center text-xs text-white">{statName}</Text>
            </View>

            <View className="bg-white px-5 py-2 rounded-b-md">
                <Text className="text-center font-medium">{value}</Text>
            </View>
        </View>
    );
};

export default Stat;
