import { ScrollView, View } from "react-native";
import Roster from "./Roster/Roster";
import Banner from "./Banner";
import { QueryClient, QueryClientProvider } from "react-query";
import StatsScrollbar from "./StatsScrollbar/StatsScrollbar";
import LastGame from "./LastGame";

const queryClient = new QueryClient();

const TeamScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <QueryClientProvider client={queryClient}>
            <ScrollView className="bg-[#f9f9fb]">
                <Banner teamID={id} />
                <StatsScrollbar teamID={id} />
                <LastGame teamID={id} />
                <Roster teamID={id} />
            </ScrollView>
        </QueryClientProvider>
    );
};

export default TeamScreen;
