import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IdentitetiService from "../../services/IdentitetiService";
import { IdentitetiRoutes } from "../../constants";

export default function IdentitetiDodaj() {
    const [identitet, setIdentitet] = useState({
        ime: "",
        prezime: "",
        godine: "",
        god_rodjenja: "",
        god_smrti: "",
    });

    const navigate = useNavigate();

    function spremiPromjene(event) {
        const { name, value } = event.target;
        setIdentitet({
            ...identitet,
            [name]: value,
        });
    }

    async function submit(event) {
        event.preventDefault();

        try {
            const odgovor = await IdentitetiService.dodaj(identitet);
            if (!odgovor) {
                alert("Problem s dodavanjem");
                return;
            }

            // Navigate to the "Identitet_pregled" route after successful form submission
            navigate(IdentitetiRoutes.Identitet_pregled);
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
                    <label className="Ime">Ime:</label>
                    <input className="tablica1" type="text" name="ime" value={identitet.ime} onChange={spremiPromjene} required />
                </div>
                <div>
                    <label className="Prezime">Prezime:</label>
                    <input className="tablica2" type="text" name="prezime" value={identitet.prezime} onChange={spremiPromjene} required />
                </div>
                <div>
                    <label className="godinarodjenja">Godina Rođenja:</label>
                    <input className="tablica3" type="number" name="god_rodjenja" value={identitet.god_rodjenja} onChange={spremiPromjene} required />
                </div>
                <div>
                    <label className="godinasmrti">Godina Smrti:</label>
                    <input className="tablica4" type="number" name="god_smrti" value={identitet.god_smrti} onChange={spremiPromjene} required />
                </div>
                <div>
                    <label className="godine">Godine:</label>
                    <input className="tablica5" type="number" name="godine" value={identitet.godine} onChange={spremiPromjene} required />
                </div>
                <button className="dodajidentitet" type="submit">
                    Dodaj Identitet
                </button>
            </form>
        </div>
    );
}
