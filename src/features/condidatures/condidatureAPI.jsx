import { requests } from "../requests";

import axios from 'axios'

export function CreateCondidature(data) {
    return axios.post(requests.condidatureapi + '/', data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
