import ReactDOM from "react-dom/client"
import { RouterComponent } from "./router.tsx"
import App from "./App.tsx"
import "./index.css"
import "virtual:svg-icons-register"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterComponent>
    <App />
  </RouterComponent>
)
