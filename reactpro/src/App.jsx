import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <Fruits />
      <ConditionalComponent />
      <Message />
      <Counter />
      <Form/>
    </div>
  );
}

export default App;
