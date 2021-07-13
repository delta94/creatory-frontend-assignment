import { GET } from "../clients";
import { STAFF_API } from "../constants/APIUri";

export const getStaffInfo = async (props) => {
  const { limit = 20, offset = 0 } = props;
  const params = {
    limit,
    offset,
  };
  const res = await GET({ url: STAFF_API.GET_STAFF_INFO, params });
  return res;
};
