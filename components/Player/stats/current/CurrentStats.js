import Stat from "./Stat";
import { View } from "react-native";
import { format } from "date-fns";
import SectionTitle from "../../../shared/SectionTitle";
import { fetchCurrentYearPlayerStats } from "../../../../api/fetchCurrentYearPlayerStats";
import withDataFetching from "../../../shared/withDataFetching";

const CurrentStats = ({ data, isGoalie }) => {
    return (
        <View className="px-5">
            <SectionTitle title={`${format(new Date(), "RRRR")} Season`} />

            <View className="flex flex-row justify-around -my-3">
                {isGoalie ? (
                    <>
                        <Stat statName="W" value={data[0].splits[0].stat.wins} />
                        <Stat statName="L" value={data[0].splits[0].stat.losses} />
                        <Stat statName="S%" value={data[0].splits[0].stat.savePercentage?.toFixed(3)} />
                        <Stat statName="SAVES" value={data[0].splits[0].stat.saves} />
                        <Stat statName="SO" value={data[0].splits[0].stat.shutouts} />
                    </>
                ) : (
                    <>
                        <Stat statName="GP" value={data[0].splits[0].stat.games} />
                        <Stat statName="G" value={data[0].splits[0].stat.goals} />
                        <Stat statName="A" value={data[0].splits[0].stat.assists} />
                        <Stat statName="P" value={data[0].splits[0].stat.points} />
                        <Stat statName="+/-" value={data[0].splits[0].stat.plusMinus} />
                    </>
                )}
            </View>
        </View>
    );
};

export default withDataFetching(fetchCurrentYearPlayerStats)(CurrentStats);
