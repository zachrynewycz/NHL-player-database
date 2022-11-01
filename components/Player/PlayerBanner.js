import { Text, View, Image } from "react-native";
import { useQuery } from "react-query";
import { fetchPlayerDetails } from "../../api/fetchPlayerDetails";
import { ImageAssets } from "../../assets/ImageAssets";
import Loading from "../General/Loading";
import { useFonts, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";

const PlayerBanner = ({ playerID }) => {
    const { data, isLoading } = useQuery("player", () => fetchPlayerDetails(playerID));
    const [fontLoading] = useFonts({ Poppins_600SemiBold, Poppins_700Bold });

    if (!fontLoading) return null;

    if (isLoading) return <Loading />;

    return (
        <View className="bg-white">
            <Image
                className="w-28 h-28 rounded-full bg-neutral-50 mx-auto mt-16 mb-2"
                source={{ uri: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerID}@3x.png` }}
            />
            <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-center text-2xl mt-2 text-neutral-800">
                {data[0].fullName}
            </Text>

            <View className="flex flex-row justify-center items-center mb-1">
                <Image className="w-14 h-14" source={ImageAssets[data[0].currentTeam.id]} />
                <Text style={{ fontFamily: "Poppins_700Bold" }} className="text-center text-xl text-neutral-600">
                    # {data[0].primaryNumber}
                </Text>
            </View>
            <View className="w-full bg-neutral-200 h-[1] absolute bottom-0" />
        </View>
    );
};

export default PlayerBanner;
