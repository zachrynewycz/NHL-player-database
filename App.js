import HomeScreen from "./components/Home/HomeScreen";
import TeamScreen from "./components/TeamOverview/TeamScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TeamOverview" component={TeamScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
