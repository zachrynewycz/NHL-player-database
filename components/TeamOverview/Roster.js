import { View, Text } from "react-native";
import { useQuery } from "react-query";
import { fetchTeamRoster } from "../../api/fetchTeamRoster";

const Roster = ({ teamID }) => {
    const { isLoading, error, data } = useQuery("roster", () => fetchTeamRoster(teamID));

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>An error has occurred...</Text>;

    return <View></View>;
};

export default Roster;
