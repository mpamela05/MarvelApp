//import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from 'react-router-dom'
import {IdentitetiRoutes, HOME, HerojiRoutes, TimoviRoutes} from './constants'
import IdentitetiPregled from "./pages/Identiteti/IdentitetiPregled";
import IdentitetiDodaj from "./pages/Identiteti/IdentitetiDodaj";
import IdentitetiPromjena from './pages/Identiteti/IdentitetiPromjena';
import IdentitetiDohvati from './pages/Identiteti/IdentitetiDohvati';
import HerojiPregled from './pages/Heroji/HerojiPregled';
import HerojiDohvati from './pages/Heroji/HerojiDohvati';
import HerojiDodaj from './pages/Heroji/HerojiDodaj';
import HerojiPromjena from './pages/Heroji/HerojiPromjena';
import TimoviPregled from "./pages/Timovi/TimoviPregled";
import TimoviDohvati from "./pages/Timovi/TimoviDohvati";
import TimoviPromjena from "./pages/Timovi/TimoviPromjena";
import TimoviDodaj from "./pages/Timovi/TimoviDodaj";
import NavBar from './components/NavBar';
import Pocetna from './pages/Pocetna';
import Container from 'react-bootstrap/esm/Container';



function App() {


return(
  <>
    <Container>
    <NavBar/>
    <Routes>
      <Route path={HOME} element={<Pocetna />}/>
      <Route path={IdentitetiRoutes.Identitet_pregled}element={<IdentitetiPregled/>}/>
      <Route path={IdentitetiRoutes.Identitet_dohvati}element={<IdentitetiDohvati/>}/>
      <Route path={IdentitetiRoutes.Identitet_dodaj}element={<IdentitetiDodaj/>}/>
      <Route path={IdentitetiRoutes.Identitet_promjena}element={<IdentitetiPromjena/>}/>

      <Route path={HerojiRoutes.Heroj_pregled}element={<HerojiPregled/>}/>
      <Route path={HerojiRoutes.Heroj_dohvati}element={<HerojiDohvati/>}/>
      <Route path={HerojiRoutes.Heroj_dodaj}element={<HerojiDodaj/>}/>
      <Route path={HerojiRoutes.Heroj_promjena}element={<HerojiPromjena/>}/>

      <Route path={TimoviRoutes.Tim_pregled}element={<TimoviPregled/>}/>
      <Route path={TimoviRoutes.Tim_dohvati}element={<TimoviDohvati/>}/>
      <Route path={TimoviRoutes.Tim_dodaj}element={<TimoviDodaj/>}/>
      <Route path={TimoviRoutes.Tim_promjena}element={<TimoviPromjena/>}/>
    </Routes>
    </Container>

  </>
)
}


//<Route path={IdentitetiRoutes.Identitet_dodaj}element={<IdentiteteiDodaj/>}/>
//<Route path={IdentitetiRoutes.Identitet_promjena}element={<IdentitetiPromjena/>}/>

export default App