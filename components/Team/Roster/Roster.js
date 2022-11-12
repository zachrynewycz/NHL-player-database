import { View, Text, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { fetchTeamRoster } from "../../../api/fetchTeamRoster";
import { useContext } from "react";
import { teamIDContext } from "../../../context/TeamProvider";
import PlayerRow from "./PlayerRow";
import SectionTitle from "../../General/SectionTitle";
import Error from "../../General/Error";
import Loading from "../../General/Loading";
import Header from "./Header";

const Roster = () => {
    const [teamID] = useContext(teamIDContext);
    const { isLoading, error, data } = useQuery("roster", () => fetchTeamRoster(teamID));

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <View className="px-5">
            <SectionTitle title="Roster" />
            <Text className="text-xs -mt-3 mb-3">Select a player to view stats</Text>

            <Header />
            <ScrollView className="bg-white rounded-b-lg h-80">
                {data.map((player) => (
                    <PlayerRow key={player.person.id} player={player} />
                ))}
            </ScrollView>
        </View>
    );
};

export default Roster;
