import { requests } from "../requests";

import axios from 'axios'

export function CreateCandidat(data) {
    return axios.post(requests.candidatapi, data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function GetAllCandidat() {
    return axios.get(requests.candidatapi+'/allcondidat')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
