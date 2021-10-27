import axios from "axios";
import { requests } from "../requests";

export function createComment(data) {
    return axios.post(requests.commentapi, data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
