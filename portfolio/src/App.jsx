import './App.css';

function App() {
  const goToAmazon = ()=>{
    window.location.href = "/amazon-clone/public/amazon.html"
  };
  return (
      <div>
        <button
          onClick={goToAmazon}
        >go to amazon</button>

      </div>
  );
}

export default App;