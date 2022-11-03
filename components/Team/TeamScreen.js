import { ScrollView } from "react-native";
import Roster from "./Roster/Roster";
import TeamBanner from "./TeamBanner";
import LastGame from "./LastGame";
import Scrollbar from "./StatsScrollbar/Scrollbar";

const TeamScreen = () => {
    return (
        <ScrollView className="bg-[#f9f9fb]">
            <TeamBanner />
            <Scrollbar />
            <LastGame />
            <Roster />
        </ScrollView>
    );
};

export default TeamScreen;
