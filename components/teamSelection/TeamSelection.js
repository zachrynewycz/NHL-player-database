import { SafeAreaView } from "react-native";
import Header from "./Header";
import TeamIcons from "./TeamIcons";
import Button from "./Button";

const TeamSelection = () => {
    return (
        <SafeAreaView>
            <Header />
            <TeamIcons />
            <Button />
        </SafeAreaView>
    );
};

export default TeamSelection;
