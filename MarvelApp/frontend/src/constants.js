export const IdentitetiRoutes = {
    Identitet_pregled: "/identiteti",
    Identitet_dohvati: "/identiteti/dohvati",
    Identitet_dodaj: "/identiteti/dodaj",
    Identitet_promjena: "/identiteti/promjena",
    Heroj_brisanje: "/identiteti/obrisi",
};

export const HerojiRoutes = {
    Heroj_pregled: "/heroji",
    Heroj_dohvati: "/heroji/dohvati",
    Heroj_dodaj: "/heroji/dodaj",
    Heroj_promjena: "/heroji/promjena",
    Heroj_brisanje: "/heroji/obrisi",
};

export const TimoviRoutes = {
    Tim_pregled: "/timovi",
    Tim_dohvati: "/timovi/dohvati",
    Tim_dodaj: "/timovi/dodaj",
    Tim_promjena: "/timovi/promjena",
    Tim_brisanje: "/timovi/obrisi",
};

export const IdentitetiEndpoints = {
    pregled: "api/Identitet/GetAll",
    dohvati: "api/Identitet/Get",
    dodaj: "api/Identitet/CreateEdit",
    promjena: "api/Identitet/CreateEdit",
    brisanje: "api/Identitet/Delete",
};

export const HerojiEndpoints = {
    pregled: "api/Heroj/GetAll",
    dohvati: "api/Heroj/Get",
    dodaj: "api/Heroj/CreateEdit",
    promjena: "api/Heroj/CreateEdit",
    brisanje: "api/Heroj/Delete",
};

export const TimoviEndpoints = {
    pregled: "api/Tim/GetAll",
    dohvati: "api/Tim/Get",
    dodaj: "api/Tim/CreateEdit",
    promjena: "api/Tim/CreateEdit",
    brisanje: "api/Tim/Delete",
};

export const BACKEND_URL = "http://pamela05-001-site1.ltempurl.com/";
export const HOME = "/";
