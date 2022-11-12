import { useQuery } from "react-query";
import { fetchPlayerDetails } from "../../../api/fetchPlayerDetails";
import { playerIDContext } from "../../../context/PlayerProvider";
import { useContext } from "react";
import Loading from "../../General/Loading";
import Error from "../../General/Error";
import ScrollItem from "../../General/StatScrollBar/ScrollItem";
import ScrollBar from "../../General/StatScrollBar/ScrollBar";

const VitalsBar = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading, error } = useQuery("vitals", () => fetchPlayerDetails(playerID));

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <ScrollBar>
            <ScrollItem heading="Position" value={data[0].primaryPosition.abbreviation} />
            <ScrollItem heading="Shoots" value={data[0].shootsCatches === "L" ? "Left" : "Right"} />
            <ScrollItem heading="Age" value={data[0].currentAge} />
            <ScrollItem heading="Height" value={data[0].height} />
            <ScrollItem heading="Weight" value={data[0].weight} />
            <ScrollItem heading="Nationality" value={data[0].nationality} />
        </ScrollBar>
    );
};

export default VitalsBar;
