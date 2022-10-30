import { View, Text, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { fetchTeamRoster } from "../../../api/fetchTeamRoster";
import Loading from "../../General/Loading";
import PlayerOverviewRow from "./PlayerOverviewRow";

// https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}@3x.jpg

const Roster = ({ teamID }) => {
    const { isLoading, error, data } = useQuery("roster", () => fetchTeamRoster(teamID));

    if (isLoading) return <Loading />;

    if (error) return <Text>An error has occurred...</Text>;

    return (
        <View className="px-7 h-96">
            <Text className="mb-3 text-lg">Roster</Text>
            <ScrollView className="bg-white rounded-xl px-5">
                {data.map((player) => (
                    <PlayerOverviewRow key={player.person.id} player={player} />
                ))}
            </ScrollView>
        </View>
    );
};

export default Roster;
