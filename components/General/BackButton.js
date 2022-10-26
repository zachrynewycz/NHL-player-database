import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const BackButton = () => {
    const nav = useNavigation();

    return <Button title="<" onPress={() => nav.goBack()} />;
};

export default BackButton;
