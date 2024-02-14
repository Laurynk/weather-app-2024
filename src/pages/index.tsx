import Image from "next/image";
import { useState } from "react";

import Header from "@/components/Header";

export default function Home() {
  var apiKey = "c19903014af6285ffd52d7ad2def6ff3"
  var url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`

  const [data, setData] = useState<ICurrentProps[]>([]);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Header />
      <h1>When You Don't Know The Weather Ask HER!</h1>
      <h3>1. Enter a location</h3>
      <h3>2. Find the city's current weather, Tommorrow's forecase, and 6 day forecast</h3>
    </main>
  );
}
