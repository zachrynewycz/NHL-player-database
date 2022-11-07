import { ScrollView } from "react-native";
import CurrentPlayerStats from "./CurrentPlayerStats/CurrentPlayerStats";
import CurrentGoalieStats from "./CurrentGoalieStats/CurrentGoalieStats";
import PlayerBanner from "./PlayerBanner/PlayerBanner";
import ScrollBar from "./VitalsScrollBar/ScrollBar";

const PlayerScreen = ({ route }) => {
    const { isGoalie } = route.params;

    return (
        <ScrollView>
            <PlayerBanner />
            <ScrollBar />
            {isGoalie ? <CurrentGoalieStats /> : <CurrentPlayerStats />}
        </ScrollView>
    );
};

export default PlayerScreen;
