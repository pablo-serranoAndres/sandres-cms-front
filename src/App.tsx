import { ModalProvider } from "./context/ModalContext";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <ModalProvider>
      {/* <Modal /> */}
      <AppRoutes />;
    </ModalProvider>
  );
}

export default App;
