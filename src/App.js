import "./App.css";
import RenderTable from "./components/RenderTable";
import { Provider } from "react-redux";
import store from "./store";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      {/* <RenderTable /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
