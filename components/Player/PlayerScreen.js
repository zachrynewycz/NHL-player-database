import { ScrollView } from "react-native";
import CurrentStats from "./CurrentStats/CurrentStats";
import PlayerBanner from "./PlayerBanner";
import ScrollBar from "./VitalsScrollBar/ScrollBar";

const PlayerScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <ScrollView>
            <PlayerBanner playerID={id} />
            <ScrollBar playerID={id} />
            <CurrentStats />
        </ScrollView>
    );
};

export default PlayerScreen;
