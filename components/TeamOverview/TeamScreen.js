import { View } from "react-native";
import Roster from "./Roster";
import TeamBanner from "./TeamBanner";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const TeamScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <QueryClientProvider client={queryClient}>
            <View>
                <TeamBanner teamID={id} />
                <Roster teamID={id} />
            </View>
        </QueryClientProvider>
    );
};

export default TeamScreen;
