import { ScrollView } from "react-native";
import Roster from "./Roster/Roster";
import TeamBanner from "./TeamBanner";
import LastGame from "./LastGame";
import Scrollbar from "./StatsScrollbar/Scrollbar";

const TeamScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <ScrollView className="bg-[#f9f9fb]">
            <TeamBanner teamID={id} />
            <Scrollbar teamID={id} />
            <LastGame teamID={id} />
            <Roster teamID={id} />
        </ScrollView>
    );
};

export default TeamScreen;
