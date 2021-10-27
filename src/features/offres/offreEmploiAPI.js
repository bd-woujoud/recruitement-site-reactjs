import { requests } from "../requests";

import axios from 'axios'

export function CreateOffreEmploi(data) {
    return axios.post(requests.offreEmploiapi, data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function GetALl() {
    return axios.get(requests.offreEmploiapi + '/alloffreEmploi')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

export function GetByID(id) {
    return axios.get(requests.offreEmploiapi + '/getoffreEmploibyid/' + id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}