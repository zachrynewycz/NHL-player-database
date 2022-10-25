import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import UnderlinedHeading from "../General/UnderlinedHeading";
import TeamSelection from "./TeamSelection";

const HomeScreen = () => {
    const [selectedTeamID, setSelectedTeamID] = useState();

    return (
        <>
            <UnderlinedHeading heading="Choose Your Team" />
            <TeamSelection selectedTeamID={selectedTeamID} setSelectedTeamID={setSelectedTeamID} />

            <TouchableOpacity className="rounded-lg">
                <Text className="bg-[#131313] text-white font-semibold text-center w-[90%] mx-auto mb-7 py-3">Go</Text>
            </TouchableOpacity>
        </>
    );
};

export default HomeScreen;
