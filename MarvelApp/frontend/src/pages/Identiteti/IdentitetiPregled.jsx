import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IdentitetiService from "../../services/IdentitetiService";
import { IdentitetiRoutes } from "../../constants";

export default function IdentitetiPregled() {
    const [identiteti, setIdentiteti] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        dohvatiIdentitete();
    }, []);

    async function dohvatiIdentitete() {
        try {
            const odgovor = await IdentitetiService.get()
            
            if (!odgovor) {
                console.error("Undefined or empty: ", odgovor);
                return;
            }
            
            setIdentiteti(odgovor)
        } catch (error) {
            console.error("API Call failed: ", error);
            
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
            alert("Uspjesno Obrisan");
        } catch (error) {
            alert(error);
            return;
        }
        dohvatiIdentitete();
    }

    async function obradiPromjenu(Id) {
        navigate(`${IdentitetiRoutes.Identitet_promjena}?id=${Id}`);
    }

    async function obradiPregled(Id) {
        navigate(`${IdentitetiRoutes.Identitet_dohvati}?id=${Id}`);
    }

    return (
        <div>
            <h2 className = "tajtl">Identiteti Pregled</h2>
            {Array.isArray(identiteti) && identiteti.length > 0 ? (
                <ul>
                    {identiteti.map((identitet) => (
                        <li key={identitet.id}>
                           <h3>{identitet.ime} {identitet.prezime} {identitet.godine} {identitet.god_rodjenja} {identitet.god_smrti > 0 ? identitet.god_smrti : null}</h3> 
                            <button onClick={() => obradiPregled(identitet.id)}>Pregledaj</button>
                            <button onClick={() => obradiPromjenu(identitet.id)}>Promjeni</button>
                            <button onClick={() => obrisi(identitet.id)}>Obriši</button>
                            
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No identiteti found.</p>
            )}
        </div>
    );
}