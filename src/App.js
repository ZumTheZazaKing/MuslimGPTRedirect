function App() {

  const goToNewURL = () => {
    window.location.href = "https://muslimgpt.teknologikomputeransp1.com"
  }

  return (
    <div className="App">
      <p className="desc">MuslimGPT has moved to a new URL:</p>
      <br/>
      <button onClick={() => goToNewURL()}>Go To New URL</button>
    </div>
  );
}

export default App;
