import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { DailyNews } from '../components/DailyNews';
import { ListWrap } from '../components/ListWrap';


export const Home = () => {
  const [loading, setLoading] = useState(false) // API data loading state
  // const itemFetchUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
  // const testData = {
  //   "by":"monort",
  //   "descendants":152,
  //   "id":30118686,
  //   "kids":[30119373,30120499,30119044,30119958,30121382,30120240,30120810,30119213,30119282,30121319,30119744,30119366,30119147,30119299,30119198,30119742,30119005,30120359,30120675,30120235,30119545,30120672,30120967,30121113,30119305,30120637,30119271,30121184,30119378,30120292,30119370,30120477,30119461,30120093,30119450,30119886,30119714,30119259,30120091,30119478,30119400,30119188,30119184,30120311,30120365],
  //   "score":335,
  //   "time":1643395417,
  //   "title":"I got an FBI record at age 11 from dabbling in cryptography (2015)",
  //   "type":"story",
  //   "url":"https://web.stanford.edu/~learnest/les/crypto.htm"
  // }

  // const getTopsId = async () => {
  //   const json = await (
  //     await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  //   ).json();

  //   for(let i = 0; i <= 10; i++){
  //     console.log(json[i])
  //     const test = await (
  //       await fetch(`https://hacker-news.firebaseio.com/v0/item/${json[i]}.json`)
  //     ).json();
  //     console.log(test)
  //   }
  //   setLoading(false)
  //   // console.log(json.length)
  // }
  // API 데이터는 한번만 받아올것. -> useEffect no dipendencies
  // useEffect(() => {
  //   getStories()
  // },[])

  return (
    loading ?
      <h1 style={{color:'white'}}>loading...</h1>
      : 
      <div>
        <Header />
        <DailyNews />
        <ListWrap />
      </div>
  )
}