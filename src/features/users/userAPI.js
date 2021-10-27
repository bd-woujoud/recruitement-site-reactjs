import { requests } from "../requests";

import axios from 'axios'



export function uploadAvatar(data) {
    return axios.put(requests.userapi + '/avatar/' + data.id, data.data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function updateUser(data) {
    return axios.put(requests.userapi + '/updateUserbyid/' + data.id, data.data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function sendMail(data) {
    return axios.put(requests.userapi + '/sendMail'+ data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}