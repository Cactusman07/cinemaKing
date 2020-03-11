/* utils.tsx */

import axios from "axios";
import * as constants from '@store/constants';

export default axios.create({
  baseURL: constants.API,
  responseType: "json"
});