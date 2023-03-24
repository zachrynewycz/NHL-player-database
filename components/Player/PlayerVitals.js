import { fetchPlayerDetails } from "../../api/fetchPlayerDetails";
import ScrollBar from "../shared/scrollableStatsBar/ScrollBar";
import ScrollBarContent from "../shared/scrollableStatsBar/ScrollBarContent";
import withDataFetching from "../shared/withDataFetching";

const PlayerVitals = ({ data }) => {
    return (
        <ScrollBar>
            <ScrollBarContent heading="Position" value={data[0].primaryPosition.abbreviation} />
            <ScrollBarContent heading="Shoots" value={data[0].shootsCatches === "L" ? "Left" : "Right"} />
            <ScrollBarContent heading="Age" value={data[0].currentAge} />
            <ScrollBarContent heading="Height" value={data[0].height} />
            <ScrollBarContent heading="Weight" value={data[0].weight} />
            <ScrollBarContent heading="Nationality" value={data[0].nationality} />
        </ScrollBar>
    );
};

export default withDataFetching(fetchPlayerDetails)(PlayerVitals);
