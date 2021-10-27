const port = 5000
const serverurl = 'http://localhost:' + port
export const requests = {
    entrepriseapi: serverurl + '/entreprise',
    candidatapi: serverurl + '/condidat',
    userapi: serverurl + '/users',
    offreEmploiapi: serverurl + '/offreEmploi',
    categoriesapi: serverurl + '/categorie',
    commentapi:serverurl+'/commentaire',
    condidatureapi:serverurl+'/condidature'
}