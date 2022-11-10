import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import { fetchPlayerDetails } from "../../../api/fetchPlayerDetails";
import { playerIDContext } from "../../../context/PlayerProvider";
import { useContext } from "react";
import SingleVital from "./SingleVital";
import Loading from "../../General/Loading";
import Error from "../../General/Error";

const ScrollBar = () => {
    const [playerID] = useContext(playerIDContext);
    const { data, isLoading, error } = useQuery("vitals", () => fetchPlayerDetails(playerID));

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <ScrollView horizontal className="px-5 py-2 mb-8 bg-white">
            <SingleVital heading="Position" value={data[0].primaryPosition.abbreviation} />
            <SingleVital heading="Shoots" value={data[0].shootsCatches === "L" ? "Left" : "Right"} />
            <SingleVital heading="Age" value={data[0].currentAge} />
            <SingleVital heading="Height" value={data[0].height} />
            <SingleVital heading="Weight" value={data[0].weight} />
            <SingleVital heading="Nationality" value={data[0].nationality} />
        </ScrollView>
    );
};

export default ScrollBar;
