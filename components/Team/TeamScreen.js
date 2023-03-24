import { ScrollView, SafeAreaView } from "react-native";
import { useContext } from "react";

import TeamProfileBanner from "./TeamProfileBanner";
import TeamStatsScrollBar from "./statsScrollBar/TeamStatsScrollBar";
import PrevGame from "./previousGame/PrevGame";
import SectionBreak from "../shared/SectionBreak";
import Roster from "./roster/Roster";

import { teamIDContext } from "../../context/TeamProvider";

const TeamScreen = () => {
    const [teamID] = useContext(teamIDContext);

    return (
        <SafeAreaView>
            <ScrollView className="bg-[#f9f9fb]">
                <TeamProfileBanner queryKey="teamStats" id={teamID} />
                <TeamStatsScrollBar queryKey="stats" id={teamID} />
                <PrevGame queryKey="lastGame" id={teamID} />
                <SectionBreak />
                <Roster queryKey="roster" id={teamID} />
                <SectionBreak />
            </ScrollView>
        </SafeAreaView>
    );
};

export default TeamScreen;
