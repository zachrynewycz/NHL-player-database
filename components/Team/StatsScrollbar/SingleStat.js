import { View, Text } from "react-native";

const SingleStat = ({ heading, value }) => {
    //h-5 for now since it cuts off values
    return (
        <View className="mx-5">
            <Text className="h-6">{heading}</Text>
            <Text>{value}</Text>
        </View>
    );
};

export default SingleStat;
