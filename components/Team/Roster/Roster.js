import { View, Text, ScrollView } from "react-native";
import { fetchTeamRoster } from "../../../api/fetchTeamRoster";
import PlayerListItem from "./PlayerListItem";
import SectionTitle from "../../shared/SectionTitle";
import Header from "./Header";
import withDataFetching from "../../shared/withDataFetching";

const Roster = ({ data }) => {
    return (
        <View className="px-5">
            <SectionTitle title="Roster" />
            <Text className="text-xs -mt-3 mb-3">Select a player to view stats</Text>

            <Header />
            <ScrollView className="bg-white rounded-b-lg h-80">
                {data.map((player) => (
                    <PlayerListItem key={player.person.id} player={player} />
                ))}
            </ScrollView>
        </View>
    );
};

export default withDataFetching(fetchTeamRoster)(Roster);
