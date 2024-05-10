import Welcome from "./Welcome";
import Code from "./Code";
export default function ConditionalComponent() {
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}

// return (
//     <div>
//       <h3>Code everyday</h3>
//     </div>
//   );
// }
// this is jsx
