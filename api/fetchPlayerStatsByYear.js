import axios from "axios";

export const fetchPlayerStatsByYear = async (id) => {
    const response = await axios(`https://statsapi.web.nhl.com/api/v1/people/${id}?stats=yearByYear`);
    const { stats } = await response.data;
    return stats;
};
