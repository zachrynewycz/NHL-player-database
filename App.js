import HomeScreen from "./components/Home/HomeScreen";
import TeamScreen from "./components/Team/TeamScreen";
import PlayerScreen from "./components/Player/PlayerScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClientProvider, QueryClient } from "react-query";
import TeamProvider from "./context/TeamProvider";
import PlayerProvider from "./context/PlayerProvider";

const Stack = createStackNavigator();
const queryClient = new QueryClient();

// https://statsapi.web.nhl.com/api/v1/game/2017020608/content

export default function App() {
    return (
        <NavigationContainer>
            <QueryClientProvider client={queryClient}>
                <TeamProvider>
                    <PlayerProvider>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="Team" component={TeamScreen} />
                            <Stack.Screen name="Player" component={PlayerScreen} />
                        </Stack.Navigator>
                    </PlayerProvider>
                </TeamProvider>
            </QueryClientProvider>
        </NavigationContainer>
    );
}
