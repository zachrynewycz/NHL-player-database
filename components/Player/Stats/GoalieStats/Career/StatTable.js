import { Table, Row, Rows, TableWrapper } from "react-native-table-component";
import teams from "../../../../../teams.json";

const StatTable = ({ data }) => {
    const tableHead = ["Season", "Team", "GP", "W", "L", "S", "S%"];
    const tableData = [];
    const seasonData = [];

    data[0].splits
        ?.filter((season) => season.league.name === "National Hockey League")
        ?.forEach((season) => {
            const rowData = [];
            rowData.push(season.season?.slice(0, 4));
            rowData.push(season.stat.games);
            rowData.push(season.stat.wins);
            rowData.push(season.stat.losses);
            rowData.push(season.stat.saves);
            rowData.push(season.stat.savePercentage?.toFixed(3));

            seasonData.push(teams[season.team.id].abbr);
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

            <TableWrapper className="flex flex-row">
                <Col data={seasonData} className="bg-neutral-200 flex-[2] items-center" />

                <Rows
                    data={tableData}
                    flexArr={[2, 1, 1, 1, 1, 1]}
                    className="py-4 border-b-[1px] border-neutral-200 bg-white px-2"
                    textStyle={{ textAlign: "center" }}
                />
            </TableWrapper>
        </Table>
    );
};

export default StatTable;
