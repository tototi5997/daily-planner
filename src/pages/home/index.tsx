import { Header, Slider } from "@/layout"
import c from "classnames"
import s from "./index.module.less"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div className={c(s.home, "relative flex flex-col")}>
      <Header />
      <div className="flex-1 flex">
        <Slider />
        <section className={c(s.body, "flex-1 relative")}>
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default Home
