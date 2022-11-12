import { useQuery } from "react-query";
import { View } from "react-native";
import { fetchHighlights } from "../../../../api/fetchHighlights";
import { useState } from "react";
import SectionTitle from "../../../General/SectionTitle";
import Thumbnail from "./Thumbnail";
import Loading from "../../../General/Loading";
import HighlightVideo from "./HighlightVideo";

const Recap = ({ gameID }) => {
    const [showThumbnail, setShowThumbnail] = useState(true);
    const { data, isLoading } = useQuery("content", () => fetchHighlights(gameID));

    if (isLoading) return <Loading />;

    return (
        <View className="px-5">
            <SectionTitle title="Highlights" />

            {showThumbnail ? (
                <Thumbnail
                    setShowThumbnail={setShowThumbnail}
                    imageSource={data.epg[3].items[0].image.cuts["1136x640"].at3x}
                />
            ) : (
                <HighlightVideo videoSrc={data.epg[3].items[0].playbacks[3].url} />
            )}
        </View>
    );
};

export default Recap;
