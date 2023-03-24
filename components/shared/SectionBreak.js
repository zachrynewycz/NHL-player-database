import { View } from "react-native";
import { useContext } from "react";
import { teamIDContext } from "../../context/TeamProvider";
import teams from "../../teams.json";

const SectionBreak = () => {
    const [teamID] = useContext(teamIDContext);

    return <View style={{ backgroundColor: teams[teamID].primary }} className="w-full h-3 my-10" />;
};

export default SectionBreak;
