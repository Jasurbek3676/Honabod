import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Yangiliklar from './Components/Yangiliklar/Yangiliklar'
import Home from './Components/Home/Home';
import Ochiq from './Components/Ochiq/Ochiq'
import Rahbariyat from './Components/Rahbariyat/Rahbariyat';
import Aparat from './Components/Aparat/Aparat'

import Fuqarolarni from './Components/Hokimyathaqida/Fuqarolarni/Fuqarolarni'
import Hokimlikning from './Components/Hokimyathaqida/Hokimlikning/Hokimlikning'
import Revizitlar from './Components/Hokimyathaqida/Rekvizitlari/Rekvizitlar'
import Tashkiliy from './Components/Hokimyathaqida/Tashkiliy/Tashkiliy'
import Viloyat from './Components/Hokimyathaqida/Viloyat/Viloyat'


import Deputatlar from './Components/Kengash/Deputatlar/Deputatlar'
import DoimiyKomissiya from './Components/Kengash/DoimiyKomissiiya/DoimiyKomissiiya'
import KomaklashuvchiKomissiya from './Components/Kengash/KomaklashuvchiKomissiya/KomaklashuvchiKomissiya'
import KotibiyatMudurlari from './Components/Kengash/KotibiyatMudurlari/KotibiyatMudurlari'
import QabulQilingan from './Components/Kengash/QabulQilingan/QabulQilingan'
import SenatAzolari from './Components/Kengash/SenatAzolari/SenatAzolari'


import Akkreditstya from './Components/Matbuotxizmati/Akkreditstsiya/Akkreditstya'
import AxborotTartibi from './Components/Matbuotxizmati/AxborotTartibi/AxborotTartibi'
import Bayonotlar from './Components/Matbuotxizmati/Bayonotlar/Bayonotlar'
import Brifinglar from './Components/Matbuotxizmati/Brifinglar/Brifinglar'
import Joylashtirilganmalumotlar from './Components/Matbuotxizmati/Jolashtirilganmalumotlar/Joylashtirilganmalumotlar'
import MatbuotAnjumanlari from './Components/Matbuotxizmati/MatbuotAnjumanlari/MatbuotAnjumanlari'
import MatbuotXizmati from './Components/Matbuotxizmati/MatbuotXizmati/MatbuotXizmati'
import Mediarejalar from './Components/Matbuotxizmati/Mediarejalar/Mediarejalar'
import Press from './Components/Matbuotxizmati/Press/Press'
import Rasmiy from './Components/Matbuotxizmati/Rasmiy/Rasmiy'



import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="App"> 
        <div className='header'>
          <Header />
        </div>
            
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/aparat' element={<Aparat/>}/>
                  <Route path='/yangi' element={<Yangiliklar />}/>
                  <Route path='/ochiq' element={<Ochiq />}/>
                  <Route path='/rahbar' element={<Rahbariyat />}/>



                  <Route path='/fuqaro' element={<Fuqarolarni />}/>
                  <Route path='/hokimlig' element={<Hokimlikning />}/>
                  <Route path='/rekvizit' element={<Revizitlar />}/>
                  <Route path='/tashkiliy' element={<Tashkiliy />}/>



                  <Route path='/deputat' element={<Deputatlar />}/>
                  <Route path='/doimiy-komissia' element={<DoimiyKomissiya />}/>
                  <Route path='/komak-komissia' element={<KomaklashuvchiKomissiya />}/>
                  <Route path='/kotibyat-mudir' element={<KotibiyatMudurlari />}/>
                  <Route path='/qabulqilingan' element={<QabulQilingan />}/>
                  <Route path='/senat-azolari' element={<SenatAzolari />}/>
                  

                  <Route path='/akreditsya' element={<Akkreditstya />}/>
                  <Route path='/axborod-tartib' element={<AxborotTartibi />}/>
                  <Route path='/bayonotlar' element={<Bayonotlar />}/>
                  <Route path='/brifinglar' element={<Brifinglar />}/>
                  <Route path='/joylashtirilgan-malumot' element={<Joylashtirilganmalumotlar />}/>
                  <Route path='/matbuot-anjuman' element={<MatbuotAnjumanlari />}/>
                  <Route path='/matbuot-hizmati' element={<MatbuotXizmati />}/>
                  <Route path='/media-reja' element={<Mediarejalar />}/>
                  <Route path='/press' element={<Press />}/>
                  <Route path='/rasmiy' element={<Rasmiy />}/>


              </Routes>
            <Footer /> 
        </div>
    </BrowserRouter>
  );
}

export default App;

