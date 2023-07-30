import React from "react";
import Heading from "./components/Heading";
import References from "./components/Referenсes";

const App : React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-slate-500 to-slate-700 flex flex-col justify-center items-center">
        <Heading/>
        <References/>
    </div>
  )
}

export default App