import { ScrollView, SafeAreaView } from "react-native";
import PlayerVitals from "./PlayerVitals";
import SectionBreak from "../shared/SectionBreak";
import PlayerProfileBanner from "./PlayerProfileBanner";
import { useContext } from "react";
import { playerIDContext } from "../../context/PlayerProvider";
import CurrentStats from "./stats/current/CurrentStats";
import GoalieCareerStats from "./stats/career/GoalieCareerStats";
import PlayerCareerStats from "./stats/career/PlayerCareerStats";

const PlayerScreen = ({ route }) => {
    const { isGoalie } = route.params;
    const [playerID] = useContext(playerIDContext);

    return (
        <SafeAreaView>
            <ScrollView className="bg-[#f9f9fb]">
                <PlayerProfileBanner queryKey="player" id={playerID} />
                <PlayerVitals queryKey="vitals" id={playerID} />
                <CurrentStats queryKey="currentStats" id={playerID} isGoalie={isGoalie} />
                <SectionBreak />
                {isGoalie ? <GoalieCareerStats /> : <PlayerCareerStats />}
                <SectionBreak />
            </ScrollView>
        </SafeAreaView>
    );
};

export default PlayerScreen;
