import axios from "axios";

export const fetchLastGame = async (id) => {
    const response = await axios(`https://statsapi.web.nhl.com/api/v1/teams/${id}?expand=team.schedule.previous`);
    const { teams } = await response.data;
    return teams;
};
