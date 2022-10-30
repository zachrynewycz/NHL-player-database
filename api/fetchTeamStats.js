import axios from "axios";

export const fetchTeamStats = async (id) => {
    const response = await axios(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.stats`);
    const { teams } = await response.data;
    return teams;
};
