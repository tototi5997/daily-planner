import { useRoutes } from "react-router-dom"
import { routerConfig } from "./router"

const App = () => {
  // 如果需要做路由级别的权限控制，可以在这里处理
  const element = useRoutes(routerConfig)
  return element
}

export default App
