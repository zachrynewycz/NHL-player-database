import axios from "axios";

export const fetchPlayerDetails = async (id) => {
    const response = await axios(`https://statsapi.web.nhl.com/api/v1/people/${id}`);
    const { people } = await response.data;
    return people;
};
