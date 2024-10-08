import React, { useState } from "react";

import NavBar from "./components/NavBar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import SnappyProcessIcon from "./images/icon-snappy-process.svg";
import AffordablePricesIcon from "./images/icon-affordable-prices.svg";
import PeopleFirstIcon from "./images/icon-people-first.svg";

function App() {
  const [isView, setIsView] = useState(false);
  const FeaturesData = [
    {
      title: "Snappy Process",
      text: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms. ",
      icon: SnappyProcessIcon,
    },
    {
      title: "Affordable Prices",
      text: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
      icon: AffordablePricesIcon,
    },
    {
      title: "People First ",
      text: "People First Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
      icon: PeopleFirstIcon,
    },
  ];
  return (
    <div>
      <NavBar isView={isView} setIsView={setIsView} />
      <Hero isView={isView} />
      <About FeaturesData={FeaturesData} />
    </div>
  );
}

export default App;
