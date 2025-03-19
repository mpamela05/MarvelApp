import { useEffect, useState, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IdentitetiService from "../../services/IdentitetiService";
import { IdentitetiRoutes } from "../../constants";


export default function IdentitetiDohvati() {
    const [identitet, setIdentitet] = useState(null);
    const location = useLocation();
    const navigate = useNavigate()

    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    useEffect(() => {
        if (id)
            dohvati(id);
    }, [id])



    async function dohvati(identitet) {
        try {
            const odgovor = await IdentitetiService.getById(identitet);

            if (!odgovor) {
                console.error("Undefined or empty: ", odgovor);
                return;
            }

            setIdentitet(odgovor)
        } catch (error) {
            alert(error);
            return;
        }
    }

    function obrisi(Id) {
        if (!confirm('Sigurno obrisati')) {
            return;
        }
        brisanjeIdentiteta(Id);
    }

    async function brisanjeIdentiteta(Id) {
        try {
            const odgovor = await IdentitetiService.obrisi(Id);
            setIdentitet(odgovor);
            alert("Uspjesno Obrisan");
        } catch (error) {
            alert(error);
            return;
        }
        navigate(IdentitetiRoutes.Identitet_pregled)
    }

    if (!identitet) {
        return <p>Loading or no data found...</p>; // Show loading or no data message
    }

    return (
        <div>
            <h2 className="tajtl">Identiteti Pregled</h2>
            <div key={identitet.id}>
                <label>{identitet.ime} {identitet.prezime}</label>
                <label>Godine: {identitet.godine}</label>
                <label>God Rođenja: {identitet.god_rodjenja}</label>
                {identitet.god_smrti > 0 && <label>God Smrti: {identitet.god_smrti}</label>}
                <button onClick={() => obrisi(identitet.id)}>Obriši</button>
            </div>
        </div>
    );
}