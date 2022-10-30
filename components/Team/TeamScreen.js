import { View } from "react-native";
import Roster from "./Roster/Roster";
import Banner from "./Banner";
import { QueryClient, QueryClientProvider } from "react-query";
import StatsScrollbar from "./StatsScrollbar/StatsScrollbar";

const queryClient = new QueryClient();

const TeamScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <QueryClientProvider client={queryClient}>
            <View>
                <Banner teamID={id} />
                <StatsScrollbar teamID={id} />
                <Roster teamID={id} />
            </View>
        </QueryClientProvider>
    );
};

export default TeamScreen;
