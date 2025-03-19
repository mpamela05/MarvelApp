import { useEffect, useState, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TimoviService from "../../services/TimoviService";
import { TimoviRoutes } from "../../constants";


export default function IdentitetiDohvati() {
    const [tim, setTim] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    useEffect(() => {
        if (id)
            dohvati(id);
    }, [id])



    async function dohvati(tim) {
        try {
            const odgovor = await TimoviService.getById(tim);

            if (!odgovor) {
                console.error("Undefined or empty: ", odgovor);
                return;
            }

            setTim(odgovor)
        } catch (error) {
            alert(error);
            return;
        }
    }

    function obrisi(Id) {
        if (!confirm('Sigurno obrisati')) {
            return;
        }
        brisanjeTima(Id);
    }

    async function brisanjeTima(Id) {
        try {
            const odgovor = await TimoviService.obrisi(Id);
            setTim(odgovor);
            alert("Uspjesno Obrisan");
        } catch (error) {
            alert(error);
            return;
        }
        navigate(TimoviRoutes.Tim_pregled);
    }

    if (!tim) {
        return <p>Loading or no data found...</p>; 
    }

    return (
        <div>
            <h2 className="tajtl">Timovi Pregled</h2>
            <div key={tim.id}>
                <label>{tim.naziv} {tim.planet}</label>
                <button onClick={() => obrisi(tim.id)}>Obriši</button>
            </div>
        </div>
    );
}