import { View, Text, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { fetchTeamRoster } from "../../../api/fetchTeamRoster";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useContext } from "react";
import { teamIDContext } from "../../../context/TeamProvider";
import PlayerOverviewRow from "./PlayerOverviewRow";
import Error from "../../General/Error";
import Loading from "../../General/Loading";
import RosterHeader from "./RosterHeader";

const Roster = () => {
    const [teamID] = useContext(teamIDContext);
    const [fontsLoaded] = useFonts({ Poppins_600SemiBold });
    const { isLoading, error, data } = useQuery("roster", () => fetchTeamRoster(teamID));

    if (!fontsLoaded) return null;

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <View className="px-6 pb-16">
            <>
                <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-xl">
                    Roster
                </Text>
                <Text className="text-xs text-neutral-400 mb-3">Select a player to view stats</Text>
            </>

            <RosterHeader />

            <ScrollView className="bg-white rounded-b-lg h-72">
                {data.map((player) => (
                    <PlayerOverviewRow key={player.person.id} player={player} />
                ))}
            </ScrollView>
        </View>
    );
};

export default Roster;
