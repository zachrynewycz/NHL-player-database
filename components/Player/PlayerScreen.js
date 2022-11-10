import { ScrollView } from "react-native";
import PlayerBanner from "./Banner/PlayerBanner";
import GoalieCurrentStats from "./Stats/GoalieStats/Current/GoalieCurrentStats";
import GoalieCareerStats from "./Stats/GoalieStats/Career/GoalieCareerStats";
import PlayerCareerStats from "./Stats/PlayerStats/Career/PlayerCareerStats";
import PlayerCurrentStats from "./Stats/PlayerStats/Current/PlayerCurrentStats";
import ScrollBar from "./VitalsScrollBar/ScrollBar";

const PlayerScreen = ({ route }) => {
    const { isGoalie } = route.params;

    return (
        <ScrollView className="bg-[#f9f9fb]">
            <PlayerBanner />
            <ScrollBar />
            {isGoalie ? <GoalieCurrentStats /> : <PlayerCurrentStats />}
            {isGoalie ? <GoalieCareerStats /> : <PlayerCareerStats />}
        </ScrollView>
    );
};

export default PlayerScreen;
