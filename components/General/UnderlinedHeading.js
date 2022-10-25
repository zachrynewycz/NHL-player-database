import { View, Text } from "react-native";

const UnderlinedHeading = ({ heading }) => {
    return (
        <View className="relative top-20 left-7 mb-5">
            <Text className="text-3xl font-black text-[#131313]">{heading}</Text>
            <View className="w-16 mt-2 h-1 bg-[#131313]" />
        </View>
    );
};

export default UnderlinedHeading;
