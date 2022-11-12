import axios from "axios";

export const fetchHighlights = async (id) => {
    const response = await axios(`http://statsapi.web.nhl.com/api/v1/game/${id}/content`);
    const { media } = await response.data;
    return media;
};
