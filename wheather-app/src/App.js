import { useState } from "react";
import { Form } from "./components/Form";
import {uid} from "uid"

function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(newActivity){
    setActivities(...newActivity, uid())
    console.log("test")
  
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
