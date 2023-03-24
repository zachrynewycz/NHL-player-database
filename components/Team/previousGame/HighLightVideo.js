import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Video } from "expo-av";
import { fetchHighlights } from "../../../api/fetchHighlights";
import SectionTitle from "../../shared/SectionTitle";
import withDataFetching from "../../shared/withDataFetching";

const HighLightVideo = ({ data }) => {
    const [showThumbnail, setShowThumbnail] = useState(true);

    return (
        <View className="px-5">
            <SectionTitle title="Highlights" />

            {showThumbnail ? (
                <TouchableOpacity onPress={() => setShowThumbnail(false)}>
                    <Image
                        className="w-full h-44 rounded-md"
                        source={{ uri: data.epg[3].items[0].image.cuts["1136x640"].at3x }}
                    />
                </TouchableOpacity>
            ) : (
                <View>
                    <Video
                        useNativeControls
                        className="w-full h-44 rounded-md "
                        resizeMode="cover"
                        source={{ uri: data.epg[3].items[0].playbacks[3].url }}
                    />
                </View>
            )}
        </View>
    );
};

export default withDataFetching(fetchHighlights)(HighLightVideo);
