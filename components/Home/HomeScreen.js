import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import UnderlinedHeading from "../General/UnderlinedHeading";
import TeamSelection from "./TeamSelection";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const [selectedTeamID, setSelectedTeamID] = useState();
    const nav = useNavigation();

    const goToTeamPage = () => {
        nav.navigate("TeamOverview", {
            id: selectedTeamID,
        });
    };

    return (
        <>
            <UnderlinedHeading heading="Choose your team" />
            <TeamSelection selectedTeamID={selectedTeamID} setSelectedTeamID={setSelectedTeamID} />

            <TouchableOpacity disabled={selectedTeamID === null} onPress={goToTeamPage}>
                <Text className="bg-[#131313] text-white font-semibold text-center w-[90%] mx-auto mb-7 py-3">Go</Text>
            </TouchableOpacity>
        </>
    );
};

export default HomeScreen;
