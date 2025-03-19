import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IdentitetiRoutes } from "../../constants";
import IdentitetiService from "../../services/IdentitetiService"


export default function IdentitetiPromjena() {
    const [identitet, setIdentitet] = useState({
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

        function obradiPromjenu(event) {
            const { name, value } = event.target;
            setIdentitet((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        async function submit(event) {
            event.preventDefault(); // Prevent default form submission
    
            try {
                const odgovor = await IdentitetiService.promjena(id, identitet);
                
                if (odgovor.greska) {
                    alert(odgovor.poruka);
                    return;
                }
                
                navigate(IdentitetiRoutes.Identitet_pregled); // Navigate to the identitet list after successful submission
            } catch (error) {
                console.error("Error updating identitet:", error);
                alert("Došlo je do greške prilikom promjene identiteta");
            }
        }

    return (
        <div>
            <h2>Promjena Identiteta</h2>
            {/* Check if identitet is loaded */}
            {identitet ? (
                <form onSubmit={submit}>
                    <div>
                        <label>Ime:</label>
                        <input
                            type="text"
                            name="ime"
                            value={identitet.ime}
                            onChange={obradiPromjenu}
                            required
                        />
                    </div>
                    <div>
                        <label>Prezime:</label>
                        <input
                            type="text"
                            name="prezime"
                            value={identitet.prezime}
                            onChange={obradiPromjenu}
                            required
                        />
                    </div>
                    <div>
                        <label>Godina Rođenja:</label>
                        <input
                            type="number"
                            name="god_rodjenja"
                            value={identitet.god_rodjenja}
                            onChange={obradiPromjenu}
                            required
                        />
                    </div>
                    <div>
                        <label>Godina Smrti (Optional):</label>
                        <input
                            type="number"
                            name="god_smrti"
                            value={identitet.god_smrti}
                            onChange={obradiPromjenu}
                        />
                    </div>
                    <div>
                        <label>Godine:</label>
                        <input
                            type="number"
                            name="godine"
                            value={identitet.godine}
                            onChange={obradiPromjenu}
                            required
                        />
                    </div>
                    <button type="submit">Spremi Promjenu</button>
                </form>
            ) : (
                <p>Loading identitet data...</p>
            )}
        </div>
    );
}
