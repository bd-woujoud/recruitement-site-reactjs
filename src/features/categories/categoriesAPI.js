import axios from "axios";
import { requests } from "../requests";

export function getAllCategories() {
    return axios.get(requests.categoriesapi + '/allcategorie')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}