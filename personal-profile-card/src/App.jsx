import React from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <ProfileCard
        name="Bhadaliya Manthan"
        id="Full Stack Developer"
        photo="https://tse4.mm.bing.net/th?id=OIP.7hZeDzBreg4lDuIe0E8iaQHaFg&pid=Api&P=0&h=180"
        instagram="https://instagram.com/johndoe"
        linkedin="https://linkedin.com/in/johndoe"
      />
    </div>
  );
};

export default App;