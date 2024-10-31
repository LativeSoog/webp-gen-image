import { MainLayout } from "./layouts/MainLayout";

function App() {
  console.log(import.meta.env.VITE_API_URL);
  return <MainLayout />;
}

export default App;
