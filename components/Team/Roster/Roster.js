import { View, Text, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { fetchTeamRoster } from "../../../api/fetchTeamRoster";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import PlayerOverviewRow from "./PlayerOverviewRow";
import Error from "../../General/Error";
import Loading from "../../General/Loading";
import RosterHeader from "./RosterHeader";

// https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}@3x.jpg

const Roster = ({ teamID }) => {
    const [fontsLoaded] = useFonts({ Poppins_600SemiBold });
    const { isLoading, error, data } = useQuery("roster", () => fetchTeamRoster(teamID));

    if (!fontsLoaded) return null;

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <View className="px-6">
            <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="mb-3 text-2xl">
                Roster
            </Text>

            <RosterHeader />
            <ScrollView className="bg-white rounded-b-xl h-80">
                {data.map((player) => (
                    <PlayerOverviewRow key={player.person.id} player={player} />
                ))}
            </ScrollView>
        </View>
    );
};

export default Roster;
