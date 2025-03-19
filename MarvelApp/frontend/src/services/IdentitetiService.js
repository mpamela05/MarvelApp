import { HttpService } from "./HttpService";
import { IdentitetiEndpoints } from "../constants";

async function get() {
    return await HttpService.get(IdentitetiEndpoints.pregled)
        .then((odgovor) => {
            return odgovor.data.value;
        })
        .catch((e) => { })
}

async function getById(Id) {
    return await HttpService.get(IdentitetiEndpoints.dohvati + `?id=${Id}`)
        .then((odgovor) => {
            
            return odgovor.data.value;
        })
        .catch((e) => { })
}

async function obrisi(id) {
    return HttpService.delete(IdentitetiEndpoints.brisanje + `?id=${id}`)
        .then(() => { return { greska: false, poruka: 'Obrisano' } })
        .catch(() => { return { greska: false, poruka: 'Problem kod brisanja' } })
}


async function dodaj(Identitet) {
    return HttpService.post(IdentitetiEndpoints.dodaj, Identitet)
        .then(() => { return { greska: false, poruka: 'Dodano' } })
        .catch(() => { return { greska: false, poruka: 'Problem kod dodavanja' } })

}
async function promjena(id, identitet) {
    return HttpService.post(IdentitetiEndpoints.promjena + `?id=${id}`, identitet)
        .then(() => { return { greska: false, poruka: 'Promjenjeno' } })
        .catch(() => { return { greska: false, poruka: 'Problem kod promjene' } })


}

export default{
    get,
    getById,
    dodaj,
    promjena,
    obrisi
}

