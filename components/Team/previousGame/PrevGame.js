import { fetchLastGame } from "../../../api/fetchLastGame";
import SectionBreak from "../../shared/SectionBreak";
import PrevGameScoreboard from "./PrevGameScoreboard";
import HighLightVideo from "./HighLightVideo";
import withDataFetching from "../../shared/withDataFetching";

const PrevGame = ({ data }) => {
    return (
        <>
            <PrevGameScoreboard data={data} />
            <SectionBreak />
            <HighLightVideo queryKey="content" id={data[0].previousGameSchedule.dates[0].games[0].gamePk} />
        </>
    );
};

export default withDataFetching(fetchLastGame)(PrevGame);
