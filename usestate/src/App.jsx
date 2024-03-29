import "./App.css";
import Card from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { personList } from './constants/fakeData';
function App() {
  //console.log{personList}

const[aktifKullanici,setAktifKullanici]=useState(15)

  return (
    <div>
      <Header aktifKullaniciSayisi={aktifKullanici} setAktifKullanici={setAktifKullanici} />
      <div className="card-container">
      {personList.map((person) => (<Card />
      <Card personInfo={person} />
      ))}
       
       {basilanButton==='Kullanıcı' && <InfoBox infoMetin={'sizinle birlikte Kullanıcı Sayısı'}  infoDeger={aktifKullaniciSayisi}
    </div>
  );
};

export default App;
