import { useState } from "react";
import Hero from "./components/Hero";
import OurTopPlants from "./components/OurTopPlants";
import CustomerReview from "./components/CustomerReview";
import OurBest from "./components/OurBest";
import LastSection from "./components/LastSection";

function App() {
  return (
    <>
      <div>
        <Hero></Hero>
        <OurTopPlants></OurTopPlants>
        <CustomerReview></CustomerReview>
        <OurBest></OurBest>
        <LastSection></LastSection>
      </div>
    </>
  );
}

export default App;
