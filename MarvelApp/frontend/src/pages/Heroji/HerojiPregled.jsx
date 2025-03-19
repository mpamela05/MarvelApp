import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HerojiService from "../../services/HerojiService";
import { HerojiRoutes } from "../../constants";

export default function HerojiPregled() {
    const [heroji, setHeroji] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        dohvatiHeroje();
    }, []);

    async function dohvatiHeroje() {
        try {
            const odgovor = await HerojiService.get()
            
            if (!odgovor) {
                console.error("Undefined or empty: ", odgovor);
                return;
            }
            
            setHeroji(odgovor)
        } catch (error) {
            console.error("API Call failed: ", error);
            
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
            alert("Uspjesno Obrisan");
        } catch (error) {
            alert(error);
            return;
        }
        dohvatiHeroje();
    }

    async function obradiPromjenu(Id) {
        navigate(`${HerojiRoutes.Heroj_promjena}?id=${Id}`);
    }

    async function obradiPregled(Id) {
        navigate(`${HerojiRoutes.Heroj_dohvati}?id=${Id}`);
    }

    return (
        <div>
            <h2 className="tajtl">Heroji Pregled</h2>
            {Array.isArray(heroji) && heroji.length > 0 ? (
                <ul>
                    {heroji.map((heroj) => (
                        <li key={heroj.id}>
                            <h3>{heroj.heroj_ime} {heroj.lokacija} {heroj.moc} {heroj.osobnost}</h3>
                            <button onClick={() => obradiPregled(heroj.id)}>Pregledaj</button>
                            <button onClick={() => obradiPromjenu(heroj.id)}>Promjeni</button>
                            <button onClick={() => obrisi(heroj.id)}>Obriši</button>
                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No identiteti found.</p>
            )}
        </div>
    );
}