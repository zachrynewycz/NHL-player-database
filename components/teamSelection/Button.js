import { TouchableOpacity, Text } from "react-native";
import { teamIDContext } from "../../context/TeamProvider";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";

const Button = () => {
    const [teamID] = useContext(teamIDContext);
    const nav = useNavigation();

    const goToTeamPage = () => {
        nav.navigate("Team");
    };

    return (
        <TouchableOpacity disabled={!teamID} onPress={goToTeamPage}>
            <Text className="bg-[#131313] text-white font-semibold text-center text-xl w-[90%] mx-auto py-3">Go</Text>
        </TouchableOpacity>
    );
};

export default Button;
