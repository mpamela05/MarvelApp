import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HerojiRoutes } from "../../constants";
import HerojiService from "../../services/HerojiService"


export default function HerojiPromjena() {
    const [heroj, setHeroj] = useState({
        ime: "",
        prezime: "",
        godine: "",
        god_rodjenja: "",
        god_smrti: "",
    });

    const location = useLocation();
    const navigate = useNavigate()

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

        function obradiPromjenu(event) {
            const { name, value } = event.target;
            setHeroj((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        async function submit(event) {
            event.preventDefault(); // Prevent default form submission
    
            try {
                const odgovor = await HerojiService.promjena(id, heroj);
                
                if (odgovor.greska) {
                    alert(odgovor.poruka);
                    return;
                }
                
                navigate(HerojiRoutes.Heroj_pregled); // Navigate to the heroj list after successful submission
            } catch (error) {
                console.error("Error updating heroj:", error);
                alert("Došlo je do greške prilikom promjene identiteta");
            }
        }

    return (
        <div>
            <h2>Promjena Heroja</h2>
            {/* Check if heroj is loaded */}
            {heroj ? (
                <form onSubmit={submit}>
                    <div>
                        <label>Ime:</label>
                        <input
                            type="text"
                            name="heroj_ime"
                            value={heroj.heroj_ime}
                            onChange={obradiPromjenu}
                            required
                        />
                    </div>
                    <div>
                        <label>Lokacija:</label>
                        <input
                            type="text"
                            name="lokacija"
                            value={heroj.lokacija}
                            onChange={obradiPromjenu}
                            required
                        />
                    </div>
                    <div>
                        <label>Moc:</label>
                        <input
                            type="text"
                            name="moc"
                            value={heroj.moc}
                            onChange={obradiPromjenu}
                            required
                        />
                    </div>
                    <div>
                        <label>Osobnost:</label>
                        <input
                            type="text"
                            name="osobnost"
                            value={heroj.osobnost}
                            onChange={obradiPromjenu}
                        />
                    </div>

                    <button type="submit">Spremi Promjenu</button>
                </form>
            ) : (
                <p>Loading heroj data...</p>
            )}
        </div>
    );
}
