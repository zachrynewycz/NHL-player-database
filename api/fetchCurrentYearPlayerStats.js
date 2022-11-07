import axios from "axios";

export const fetchCurrentYearPlayerStats = async (id) => {
    const response = await axios(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason`);
    const { stats } = await response.data;
    return stats;
};
