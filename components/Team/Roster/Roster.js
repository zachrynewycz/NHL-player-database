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
        <>
            <Text>Roster</Text>
            <ScrollView>
                {data.map((player) => (
                    <PlayerOverviewRow key={player.person.id} player={player} />
                ))}
            </ScrollView>
        </>
    );
};

export default Roster;
