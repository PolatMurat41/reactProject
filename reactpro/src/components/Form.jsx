import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  //name stores data like props
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName}-{name.lastName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
//do refles impact  and stored data in state is lost(this is default behavior change it(onclick)
// onChange={(e) => setName({ ...name, firstName: e.target.value })}
//(json) update name with new data firstName:e.target.value
//setName function controls the name state
//console.log(name) gives us the {firstName: 'murat', lastName: 'polat'}
