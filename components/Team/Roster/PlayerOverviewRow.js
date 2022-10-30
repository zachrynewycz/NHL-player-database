import { Image, Text, View } from "react-native";

const PlayerOverviewRow = ({ player }) => {
    return (
        <View className="flex flex-row items-center py-5">
            <Image
                className="w-12 h-12 rounded-full bg-neutral-50"
                source={{
                    uri: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}@3x.png`,
                }}
            />
            <View className="ml-5">
                <Text className="text-base">{player.person.fullName}</Text>
                <Text>
                    #{player.jerseyNumber} • {player.position.abbreviation}
                </Text>
            </View>

            <View className="absolute bottom-0 w-full h-[1] bg-neutral-200" />
        </View>
    );
};

export default PlayerOverviewRow;
