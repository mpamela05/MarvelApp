import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TimoviService from "../../services/TimoviService";
import { TimoviRoutes } from "../../constants";

export default function TimoviPregled() {
    const [timovi, setTimovi] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        dohvatiTimove();
    }, []);

    async function dohvatiTimove() {
        try {
            const odgovor = await TimoviService.get()
            
            if (!odgovor) {
                console.error("Undefined or empty: ", odgovor);
                return;
            }
            
            setTimovi(odgovor)
        } catch (error) {
            console.error("API Call failed: ", error);
            
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
            alert("Uspjesno Obrisan");
        } catch (error) {
            alert(error);
            return;
        }
        dohvatiTimove();
    }

    async function obradiPromjenu(Id) {
        navigate(`${TimoviRoutes.Tim_promjena}?id=${Id}`);
    }

    async function obradiPregled(Id) {
        navigate(`${TimoviRoutes.Tim_dohvati}?id=${Id}`);
    }

    return (
        <div>
            <h2 className="tajtl">Identiteti Pregled</h2>
            {Array.isArray(timovi) && timovi.length > 0 ? (
                <ul>
                    {timovi.map((tim) => (
                        <li key={tim.id}>
                           <h3>{tim.naziv} {tim.planet}</h3> 
                            <button onClick={() => obradiPregled(tim.id)}>Pregledaj</button>
                            <button onClick={() => obradiPromjenu(tim.id)}>Promjeni</button>
                            <button onClick={() => obrisi(tim.id)}>Obriši</button>
                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Tim found.</p>
            )}
        </div>
    );
}