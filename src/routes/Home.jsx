import { Header } from '../components/Header';
import { DailyNews } from '../components/DailyNews';
import { ListWrap } from '../components/ListWrap';


export const Home = () => {
  return (
    <div>
      <Header />
      <DailyNews />
      <ListWrap />
    </div>
  )
}