import { ScrollView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import PlayerBanner from "./PlayerBanner";
import ScrollBar from "./VitalsScrollBar/ScrollBar";

const queryClient = new QueryClient();

const PlayerScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <QueryClientProvider client={queryClient}>
            <ScrollView>
                <PlayerBanner playerID={id} />
                <ScrollBar playerID={id} />
            </ScrollView>
        </QueryClientProvider>
    );
};

export default PlayerScreen;
