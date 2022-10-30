import { Image, TouchableOpacity, FlatList } from "react-native";
import { ImageAssets } from "../../assets/ImageAssets";
import teams from "../../teams.json";

const TeamSelection = ({ selectedTeamID, setSelectedTeamID }) => {
    return (
        <FlatList
            className="mt-20"
            data={Object.keys(teams)}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelectedTeamID(item)} className="w-1/3">
                    <Image
                        style={{ backgroundColor: selectedTeamID === item ? "#999999" : "#e3e3e3" }}
                        className="w-20 h-20 m-auto my-4 rounded-full"
                        source={ImageAssets[item]}
                    />
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
            numColumns={3}
        />
    );
};

export default TeamSelection;
