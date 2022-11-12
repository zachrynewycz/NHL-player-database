import { ScrollView, SafeAreaView } from "react-native";
import PlayerBanner from "./Banner/PlayerBanner";
import GoalieCurrentStats from "./Stats/GoalieStats/Current/GoalieCurrentStats";
import GoalieCareerStats from "./Stats/GoalieStats/Career/GoalieCareerStats";
import PlayerCareerStats from "./Stats/PlayerStats/Career/PlayerCareerStats";
import PlayerCurrentStats from "./Stats/PlayerStats/Current/PlayerCurrentStats";
import VitalsBar from "./VitalsBar/VitalsBar";
import SectionBreak from "../General/SectionBreak";

const PlayerScreen = ({ route }) => {
    const { isGoalie } = route.params;

    return (
        <SafeAreaView>
            <ScrollView className="bg-[#f9f9fb]">
                <PlayerBanner />
                <VitalsBar />
                {isGoalie ? <GoalieCurrentStats /> : <PlayerCurrentStats />}
                <SectionBreak />
                {isGoalie ? <GoalieCareerStats /> : <PlayerCareerStats />}
            </ScrollView>
        </SafeAreaView>
    );
};

export default PlayerScreen;
