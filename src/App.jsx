import { useState } from 'react';
import './App.css'
import FromAction from './components/FormAction/FormAction';
import FormStatus from './components/useFormStatus/FormStatus';

function App() {
const [showTab, setShowTab] = useState("formAction");

let content;

if(showTab === "formAction"){
  content = <FromAction/>
}

if(showTab === "formStatus"){
  content = <FormStatus/>
}

  const toggleHandler = (type) => {
    setShowTab(type);
  }

  const btnCls = `p-1 bg-gray-200 rounded text-xl border-3`;
  
  return (
    <>
     <nav className='bg-gray-100 p-1 flex items-start gap-x-2'>
      <button className={`${btnCls} ${showTab === "formAction" ? "border-green-500" : "border-fuchsia-500"}`} onClick={() => toggleHandler("formAction")}>Form Action</button>
      <button className={`${btnCls} ${showTab === "formStatus" ? "border-green-500" : "border-fuchsia-500"}`} onClick={() => toggleHandler("formStatus")}>Form Status</button>
     </nav>
     <div className="mt-10">{content}</div>

    </>
  )
}

export default App
