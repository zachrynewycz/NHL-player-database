import Spinner from "react-native-loading-spinner-overlay";
import { View, Text } from "react-native";

const Loading = () => {
    return (
        <View className="flex justify-center items-center">
            <Text>Loading</Text>
            <Spinner />
        </View>
    );
};

export default Loading;
