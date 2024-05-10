export default function Message() {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click here to </button>
    </div>
  );
}

// if onClick={handleClick()} you can call one time the function