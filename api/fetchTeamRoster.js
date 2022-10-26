import axios from "axios";

export const fetchTeamRoster = async (id) => {
    const response = await axios(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`);
    const data = await response.data;
    return data;
};
