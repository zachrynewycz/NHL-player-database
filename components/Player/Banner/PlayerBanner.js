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
    const [fontLoaded] = useFonts({ Poppins_600SemiBold, Poppins_700Bold });
    const { data, isLoading } = useQuery("player", () => fetchPlayerDetails(playerID));

    if (!fontLoaded) return null;

    if (isLoading) return <Loading />;

    return (
        <View className="bg-white">
            <View className="flex flex-row items-center p-5">
                <Image
                    className="w-20 h-20 rounded-full border-[1px] border-neutral-300 bg-white"
                    source={{ uri: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerID}@3x.png` }}
                />

                <View className="ml-5">
                    <Text
                        style={{ fontFamily: "Poppins_700Bold" }}
                        className="text-xl text-neutral-90 break-normal leading-7"
                    >
                        {data[0].firstName} {data[0].lastName}
                    </Text>

                    <View className="flex flex-row items-center">
                        <Image className="w-10 h-10 -my-1 -ml-2" source={ImageAssets[data[0].currentTeam.id]} />
                        <Text className="text-center text-lg font-semibold text-neutral-600">
                            • #{data[0].primaryNumber}
                        </Text>
                    </View>
                </View>
            </View>

            <View className="w-full bg-neutral-200 h-[1] absolute bottom-0" />
        </View>
    );
};

export default PlayerBanner;
