import { Image, Text, View } from "react-native";

const PlayerOverviewRow = ({ player }) => {
    return (
        <View className="flex flex-row items-center p-4 mx-4">
            <Image
                className="w-12 h-12 rounded-full"
                source={{
                    uri: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}@3x.jpg`,
                }}
            />
            <View className="ml-5">
                <Text>{player.person.fullName}</Text>
                <Text>
                    #{player.jerseyNumber} • {player.position.abbreviation}
                </Text>
            </View>
        </View>
    );
};

export default PlayerOverviewRow;
