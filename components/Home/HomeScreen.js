import { SafeAreaView } from "react-native";
import TeamSelection from "./TeamSelection";
import NavigationButton from "./NavigationButton";
import Header from "./Header";

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Header />
            <TeamSelection />
            <NavigationButton />
        </SafeAreaView>
    );
};

export default HomeScreen;
