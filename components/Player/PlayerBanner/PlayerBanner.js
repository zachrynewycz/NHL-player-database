import { Text, View, Image } from "react-native";
import { useQuery } from "react-query";
import { fetchPlayerDetails } from "../../../api/fetchPlayerDetails";
import { ImageAssets } from "../../../assets/ImageAssets";
import { useFonts, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useContext } from "react";
import { playerIDContext } from "../../../context/PlayerProvider";
import Loading from "../../General/Loading";

const PlayerBanner = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading } = useQuery("player", () => fetchPlayerDetails(playerID));
    const [fontLoaded] = useFonts({ Poppins_600SemiBold, Poppins_700Bold });

    if (!fontLoaded) return null;

    if (isLoading) return <Loading />;

    return (
        <View className="bg-white">
            <Image className="w-96 h-96 absolute -right-40 -top-20 opacity-[0.03]" source={ImageAssets[data[0].currentTeam.id]} />

            <View className="flex flex-row items-center py-8 mt-10 px-5">
                <Image
                    className="w-20 h-20 rounded-full border-[1px] border-neutral-300 bg-white"
                    source={{ uri: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerID}@3x.png` }}
                />

                <View className="ml-5">
                    <Text
                        style={{ fontFamily: "Poppins_700Bold" }}
                        className="text-xl text-neutral-90 break-normal leading-7 mt-5 -mb-1"
                    >
                        {data[0].firstName} {data[0].lastName}
                    </Text>

                    <View className="flex flex-row items-center -ml-2">
                        <Image className="w-10 h-10" source={ImageAssets[data[0].currentTeam.id]} />

                        <Text style={{ fontFamily: "Poppins_600SemiBold" }} className="text-center text-xl text-neutral-600">
                            #{data[0].primaryNumber}
                        </Text>
                    </View>
                </View>
            </View>

            <View className="w-full bg-neutral-200 h-[1] absolute bottom-0" />
        </View>
    );
};

export default PlayerBanner;
