import { Table, Row } from "react-native-table-component";
import teams from "../../../../../teams.json";

const StatTable = ({ data }) => {
    const tableHead = ["Season", "Team", "GP", "W", "L", "S", "S%"];
    const tableData = [];

    data[0].splits
        ?.filter((season) => season.league.name === "National Hockey League")
        ?.forEach((season) => {
            const rowData = [];
            rowData.push(season.season?.slice(0, 4));
            rowData.push(teams[season.team.id].abbr);
            rowData.push(season.stat.games);
            rowData.push(season.stat.wins);
            rowData.push(season.stat.losses);
            rowData.push(season.stat.saves);
            rowData.push(season.stat.savePercentage?.toFixed(3));
            tableData.push(rowData);
        });

    return (
        <Table>
            <Row
                data={tableHead}
                flexArr={[2, 2, 1, 1, 1, 1, 1]}
                className="bg-neutral-900 px-2 py-4 rounded-t-md"
                textStyle={{ color: "#FFFFFF", textAlign: "center" }}
            />

            {tableData?.map((season, index) => (
                <Row
                    key={index}
                    data={season}
                    flexArr={[2, 2, 1, 1, 1, 1, 1]}
                    className="py-3 border-b-[1px] border-neutral-200 bg-white px-2"
                    textStyle={{ textAlign: "center" }}
                />
            ))}
        </Table>
    );
};

export default StatTable;
