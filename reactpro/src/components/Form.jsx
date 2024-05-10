import { useState } from "react";

export default function Form() {
    const [name,setName]=useState("")
    
  function handleChance() {
    console.log("Chance occured");
  }
  return (
    <div>
      <form>
        <input onChange={handleChance} type="text" value={name} />
      </form>
    </div>
  );
}
