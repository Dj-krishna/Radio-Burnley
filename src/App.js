import "../src/styles/App.css";
import Content from "./components/Content";
import LogoHeader from "./components/LogoHeader";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <section className="App">
      <LogoHeader />
      <Content />
      <MusicPlayer />
    </section>
  );
}

export default App;
