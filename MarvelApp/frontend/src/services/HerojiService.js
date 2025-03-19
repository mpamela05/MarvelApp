import { HttpService } from "./HttpService";
import { HerojiEndpoints } from "../constants";

async function get() {
    return await HttpService.get(HerojiEndpoints.pregled)
        .then((odgovor) => {
            return odgovor.data.value;
        })
        .catch((e) => { })
}

async function getById(Id) {
    return await HttpService.get(HerojiEndpoints.dohvati + `?id=${Id}`)
        .then((odgovor) => {
            
            return odgovor.data.value;
        })
        .catch((e) => { })
}

async function obrisi(id) {
    return HttpService.delete(HerojiEndpoints.brisanje + `?id=${id}`)
        .then(() => { return { greska: false, poruka: 'Obrisano' } })
        .catch(() => { return { greska: false, poruka: 'Problem kod brisanja' } })
}


async function dodaj(Identitet) {
    return HttpService.post(HerojiEndpoints.dodaj, Identitet)
        .then(() => { return { greska: false, poruka: 'Dodano' } })
        .catch(() => { return { greska: false, poruka: 'Problem kod dodavanja' } })

}
async function promjena(id, identitet) {
    return HttpService.post(HerojiEndpoints.promjena + `?id=${id}`, identitet)
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

