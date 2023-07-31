import React from "react";
import Heading from "./components/Heading";
import References from "./components/Referenсes";

const App : React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/bg.png')] bg-cover flex flex-col justify-center items-center">
        <Heading/>
        <References/>
    </div>
  )
}

export default App