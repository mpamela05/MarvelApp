import { useEffect, useState, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HerojiService from "../../services/HerojiService";
import { HerojiRoutes } from "../../constants";


export default function HerojiDohvati() {
    const [heroj, setHeroj] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    useEffect(() => {
        if (id)
            dohvati(id);
    }, [id])



    async function dohvati(heroj) {
        try {
            const odgovor = await HerojiService.getById(heroj);

            if (!odgovor) {
                console.error("Undefined or empty: ", odgovor);
                return;
            }

            setHeroj(odgovor)
        } catch (error) {
            alert(error);
            return;
        }




    }

    function obrisi(Id) {
        if (!confirm('Sigurno obrisati')) {
            return;
        }
        brisanjeHeroja(Id);
    }

    async function brisanjeHeroja(Id) {
        try {
            const odgovor = await HerojiService.obrisi(Id);
            setHeroj(odgovor);
            alert("Uspjesno Obrisan");
        } catch (error) {
            alert(error);
            return;
        }
        navigate(HerojiRoutes.Heroj_pregled);
    }

    if (!heroj) {
        return <p>Loading or no data found...</p>; // Show loading or no data message
    }

    return (
        <div>
            <h2 className="tajtl">Heroji Pregled</h2>
            <div key={heroj.id}>
                <label>{heroj.ime} {heroj.lokacija}</label>
                <label>Moc: {heroj.moc}</label>
                <label>Osobnost: {heroj.osobnost}</label>
                <button onClick={() => obrisi(heroj.id)}>Obriši</button>
            </div>
        </div>
    );
}