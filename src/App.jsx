import { useState } from 'react';
import './App.css'
import Posts from './components/FormAction/FormAction';

function App() {
const [showTab, setShowTab] = useState("formAction");

let content;

if(showTab === "formAction"){
  content = <Posts/>
}

  const toggleHandler = (type) => {
    setShowTab(type);
  }

  return (
    <>
     <nav className='bg-gray-100 p-1 flex items-start gap-x-2'>
      <button className='p-1 bg-gray-200 rounded text-xl border-2 border-fuchsia-500' onClick={() => toggleHandler("formAction")}>Form Action</button>
      <button className='p-1 bg-gray-200 rounded text-xl border-2 border-fuchsia-500' onClick={() => toggleHandler("something")}>something</button>
     </nav>
     <div className="mt-10">{content}</div>

    </>
  )
}

export default App
