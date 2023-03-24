import { Text, View, Image } from "react-native";
import { fetchPlayerDetails } from "../../api/fetchPlayerDetails";
import { ImageAssets } from "../../assets/ImageAssets";
import usePoppinsFonts from "../../hooks/usePoppinsFonts";
import withDataFetching from "../shared/withDataFetching";

const PlayerProfileBanner = ({ data, id }) => {
    const fontsLoaded = usePoppinsFonts();

    if (!fontsLoaded) return null;

    return (
        <View className="bg-white">
            <View className="flex flex-row items-center p-5">
                <Image
                    className="w-20 h-20 rounded-full border-[1px] border-neutral-300 bg-white"
                    source={{ uri: `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${id}@3x.png` }}
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

export default withDataFetching(fetchPlayerDetails)(PlayerProfileBanner);
