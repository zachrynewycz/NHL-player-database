import { Image, TouchableOpacity, FlatList } from "react-native";
import { ImageAssets } from "../../assets/ImageAssets";
import teams from "../../teams.json";
import { teamIDContext } from "../../context/TeamProvider";
import { useContext } from "react";

const TeamIcons = () => {
    const [teamID, setTeamID] = useContext(teamIDContext);

    return (
        <FlatList
            className="h-[570px]"
            data={Object.keys(teams)}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => (teamID === item ? setTeamID("") : setTeamID(item))} className="w-1/3">
                    <Image
                        style={{ backgroundColor: teamID === item ? "#999999" : "#e3e3e3" }}
                        className="w-20 h-20 m-auto my-4 rounded-full"
                        source={ImageAssets[item]}
                    />
                </TouchableOpacity>
            )}
            keyExtractor={(index) => index}
            numColumns={3}
        />
    );
};

export default TeamIcons;
