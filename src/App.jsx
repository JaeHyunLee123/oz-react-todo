import backgroundImage from "./libs/background";
import "./App.css";
import Footer from "./components/Footer";
import CurrentTime from "./components/CurrentTime";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      className="body"
      // 랜덤 배경 때문에 어쩔 수 없이 인라인 속성 사용
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // full viewport height
      }}
    >
      <main>
        <CurrentTime />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
