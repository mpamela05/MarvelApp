import { HttpService } from "./HttpService";
import { TimoviEndpoints } from "../constants";

async function get() {
    return await HttpService.get(TimoviEndpoints.pregled)
        .then((odgovor) => {
            return odgovor.data.value;
        })
        .catch((e) => { })
}

async function getById(Id) {
    return await HttpService.get(TimoviEndpoints.dohvati + `?id=${Id}`)
        .then((odgovor) => {
            
            return odgovor.data.value;
        })
        .catch((e) => { })
}

async function obrisi(id) {
    return HttpService.delete(TimoviEndpoints.brisanje + `?id=${id}`)
        .then(() => { return { greska: false, poruka: 'Obrisano' } })
        .catch(() => { return { greska: false, poruka: 'Problem kod brisanja' } })
}


async function dodaj(tim) {
    return HttpService.post(TimoviEndpoints.dodaj, tim)
        .then(() => { return { greska: false, poruka: 'Dodano' } })
        .catch(() => { return { greska: false, poruka: 'Problem kod dodavanja' } })

}
async function promjena(id, tim) {
    return HttpService.post(TimoviEndpoints.promjena + `?id=${id}`, tim)
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

