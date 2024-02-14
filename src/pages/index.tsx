import Image from "next/image";
import { useState } from "react";
import styles from '@/styles/home.module.css'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeatherPage from "@/components/WeatherPage";

export default function Home() {
  var apiKey = "c19903014af6285ffd52d7ad2def6ff3"
  var currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`
  var dayHourUrl = `api.openweathermap.org/data/2.5/forecast?q={city}&appid=${apiKey}`

  const [data, setData] = useState<ICurrentProps[]>([]);
  const [city, setCity] = useState<ICityValue[]>([]);

  const GrabWeather = () => {
    fetch(currentUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
    })
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.header}>When You Don't Know The Weather, Ask HER!</h1>
          <h3 className={styles.subtext}>1. Enter a location</h3>
          <h3 className={styles.subtext}>2. Find the city's current weather, Tommorrow's forecase, and 6 day forecast</h3>
        </div>

        <div className={styles.searchFunction}>
          <form >
            <input className={styles.searchBar}
              type="search"
              placeholder="Enter location"
            />
            <button className={styles.submit} onClick={() => GrabWeather}>Submit</button>
          </form>
        </div>

       


      </div>
      <Footer />


    </main>
  );
}


