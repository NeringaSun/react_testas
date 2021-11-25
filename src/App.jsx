import React from "react";
import Button from "./components/Button";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Hero title="My website" subtitle="This is my website" />
      <Button>Labas</Button>
    </div>
  );
};

export default App;
