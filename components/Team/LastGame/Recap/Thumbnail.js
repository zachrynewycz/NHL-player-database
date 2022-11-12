import { TouchableOpacity, Image } from "react-native";

const Thumbnail = ({ setShowThumbnail, imageSource }) => {
    return (
        <TouchableOpacity onPress={() => setShowThumbnail(false)}>
            <Image className="w-full h-44 rounded-md" source={{ uri: imageSource }} />
        </TouchableOpacity>
    );
};

export default Thumbnail;
