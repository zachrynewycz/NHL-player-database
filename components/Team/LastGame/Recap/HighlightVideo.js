import { View } from "react-native";
import { Video } from "expo-av";

const HighlightVideo = ({ videoSrc }) => {
    return (
        <View>
            <Video useNativeControls className="w-full h-44 rounded-md " resizeMode="cover" source={{ uri: videoSrc }} />
        </View>
    );
};

export default HighlightVideo;
