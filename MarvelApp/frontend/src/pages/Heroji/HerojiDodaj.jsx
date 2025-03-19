import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HerojiService from "../../services/HerojiService";
import { HerojiRoutes } from "../../constants";


export default function HerojiDodaj(){

    const [ heroj, setHeroj ] = useState({
        heroj_ime: "",
        lokacija: "",
        moc: "",
        osobnost: "",
    });

    const navigate = useNavigate();

    function spremiPromjene(event) {
        const { name, value } = event.target;
        setHeroj({
            ...heroj,
            [name]: value,
        });
    }

    async function submit(event) {
        event.preventDefault();

        try {
            const odgovor = await HerojiService.dodaj(heroj);
            if (!odgovor) {
                alert("Problem s dodavanjem");
                return;
            }

            // Navigate to the "Heroj_pregled" route after successful form submission
            navigate(HerojiRoutes.Heroj_pregled);
        } catch (error) {
            console.error("Error adding heroj:", error);
            alert("Došlo je do greške");
        }
    }

    return (
        <div>
            <h2 className="tajtl">Dodaj Heroj</h2>
            <form onSubmit={submit}>
                <div>
                    <label>Ime:</label>
                    <input
                        type="text"
                        name="heroj_ime"
                        value={heroj.heroj_ime}
                        onChange={spremiPromjene}
                        required
                    />
                </div>
                <div>
                    <label>Lokacija:</label>
                    <input
                        type="text"
                        name="lokacija"
                        value={heroj.lokacija}
                        onChange={spremiPromjene}
                        required
                    />
                </div>
                <div>
                    <label>Moc:</label>
                    <input
                        type="text"
                        name="moc"
                        value={heroj.moc}
                        onChange={spremiPromjene}
                        required
                    />
                </div>
                <div>
                    <label>Osobnost:</label>
                    <input
                        type="text"
                        name="osobnost"
                        value={heroj.osobnost}
                        onChange={spremiPromjene}
                    />
                </div>

                <button
                className="dodajidentitet"
                type="submit">Dodaj Heroj</button>
            </form>
        </div>
    );
}