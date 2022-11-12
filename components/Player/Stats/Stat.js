import { View, Text } from "react-native";

const Stat = ({ value, statName }) => {
    return (
        <View>
            <Text className="text-center py-2  text-base font-medium text-neutral-400">{statName}</Text>
            <Text className="text-center text-xl font-semibold">{value}</Text>
        </View>
    );
};

export default Stat;
