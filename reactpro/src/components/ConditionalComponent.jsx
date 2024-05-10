import Welcome from "./Welcome";
import Code from "./Code";
export default function ConditionalComponent() {
  const display = false;
  {
   return display ? <Welcome/> : <Code/>;
  }
 
}
// return (
//     <div>
//       <h3>Code everyday</h3>
//     </div>
//   );
// }
// this is jsx
