import axios from "axios";

export const fetchTeamStats = async (id) => {
    const response = await axios(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.stats`);
    const data = await response.data;
    return data;
};
