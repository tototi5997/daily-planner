import c from "classnames"
import s from "./index.module.less"
import ExhibitPage from "@/components/exhabitPage"

const Foo = () => {
  return (
    <ExhibitPage title="数据管理" showBack>
      <div className={c(s.foo, "h-full flex flex-col items-center justify-center")}>
        <div className={c(s.coding, "w-200 h-200 mb-10")} />
        <p className="fs14 gray-1">您还没有任务，快去创建吧 ...</p>
      </div>
    </ExhibitPage>
  )
}

export default Foo
