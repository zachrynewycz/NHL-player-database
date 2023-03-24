import { Table, Row, Rows, TableWrapper, Col } from "react-native-table-component";
import teams from "../../../../teams.json";

const CareerStatsTable = ({ data, isGoalie }) => {
    const GOALIE_COLUMN_TITLES = ["Season", "Team", "GP", "W", "L", "S", "S%"];
    const PLAYER_COLUMN_TITLES = ["Season", "Team", "GP", "G", "A", "P", "+/-"];

    const tableData = [];
    const seasonData = [];

    if (isGoalie) {
        data[0].splits
            ?.filter((season) => season.league.name === "National Hockey League")
            ?.forEach((season) => {
                const rowData = [
                    season.season?.slice(0, 4),
                    season.stat.games,
                    season.stat.wins,
                    season.stat.losses,
                    season.stat.saves,
                    season.stat.savePercentage?.toFixed(3),
                ];

                seasonData.push(teams[season.team.id].abbr);
                tableData.push(rowData);
            });
    } else {
        data[0].splits
            ?.filter((season) => season.league.name === "National Hockey League")
            ?.forEach((season) => {
                const rowData = [
                    teams[season.team.id].abbr,
                    season.stat.games,
                    season.stat.goals,
                    season.stat.assists,
                    season.stat.points,
                    season.stat.plusMinus,
                ];

                seasonData.push(season.season?.slice(0, 4));
                tableData.push(rowData);
            });
    }

    return (
        <Table>
            <Row
                data={isGoalie ? GOALIE_COLUMN_TITLES : PLAYER_COLUMN_TITLES}
                flexArr={isGoalie ? [2, 2, 1, 1, 1, 1, 2] : [2, 2, 1, 1, 1, 1, 1]}
                className="bg-neutral-900 px-2 py-4 rounded-t-md"
                textStyle={{ color: "#FFFFFF", textAlign: "center" }}
            />

            <TableWrapper className="flex flex-row">
                <Col data={seasonData} className="bg-neutral-200 flex-[2] items-center" />

                <Rows
                    data={tableData}
                    flexArr={isGoalie ? [2, 1, 1, 1, 1, 2] : [2, 1, 1, 1, 1, 1]}
                    className="py-4 border-b-[1px] border-neutral-200 bg-white px-2"
                    textStyle={{ textAlign: "center" }}
                />
            </TableWrapper>
        </Table>
    );
};

export default CareerStatsTable;
