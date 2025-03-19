import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TimoviService from "../../services/TimoviService";
import { TimoviRoutes } from "../../constants";


export default function TimoviDodaj(){

    const [ tim, setTim ] = useState({
        naziv: "",
        planet: "",

    });

    const navigate = useNavigate();

    function spremiPromjene(event) {
        const { name, value } = event.target;
        setTim({
            ...tim,
            [name]: value,
        });
    }

    async function submit(event) {
        event.preventDefault();

        try {
            const odgovor = await TimoviService.dodaj(tim);
            if (!odgovor) {
                alert("Proble s dodavanjem");
                return;
            }

            
            navigate(TimoviRoutes.Tim_pregled);
        } catch (error) {
            console.error("Error adding identitet:", error);
            alert("Došlo je do greške");
        }
    }

    return (
        <div>
            <h2 className="tajtl">Dodaj Identitet</h2>
            <form onSubmit={submit}>
                <div>
                    <label>Naziv:</label>
                    <input 
                        type="text"
                        name="naziv"
                        value={tim.naziv}
                        onChange={spremiPromjene}
                        required
                    />
                </div>
                <div>
                    <label>Planet:</label>
                    <input
                        type="text"
                        name="planet"
                        value={tim.planet}
                        onChange={spremiPromjene}
                        required
                    />
                </div>
                <button
                className="dodajidentitet"
                type="submit">Dodaj Identitet</button>
            </form>
        </div>
    );
}