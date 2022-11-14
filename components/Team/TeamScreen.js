import { ScrollView, SafeAreaView } from "react-native";
import Roster from "./Roster/Roster";
import TeamBanner from "./TeamBanner/TeamBanner";
import LastGame from "./LastGame/LastGame";
import Scrollbar from "./StatsScrollBar/Scrollbar";
import SectionBreak from "../General/SectionBreak";

const TeamScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView className="bg-[#f9f9fb]">
                <TeamBanner />
                <Scrollbar />
                <LastGame />
                <SectionBreak />
                <Roster />
                <SectionBreak />
            </ScrollView>
        </SafeAreaView>
    );
};

export default TeamScreen;
