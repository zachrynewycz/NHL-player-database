import { ScrollView } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import Roster from "./Roster/Roster";
import TeamBanner from "./TeamBanner";
import LastGame from "./LastGame";
import Scrollbar from "./StatsScrollbar/Scrollbar";

const queryClient = new QueryClient();

const TeamScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <QueryClientProvider client={queryClient}>
            <ScrollView className="bg-[#f9f9fb]">
                <TeamBanner teamID={id} />
                <Scrollbar teamID={id} />
                <LastGame teamID={id} />
                <Roster teamID={id} />
            </ScrollView>
        </QueryClientProvider>
    );
};

export default TeamScreen;
