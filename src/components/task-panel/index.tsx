import { Children, useEffect, useMemo, useRef, useState } from "react"
import s from "./index.module.less"
import c from "classnames"

interface TTaskPanel {
  title?: string
  selected?: boolean
  onClick?: () => void
}

const TaskPanel: React.FC<TTaskPanel> = (props) => {
  const { selected, title, onClick } = props

  const taskContent = useRef<HTMLDivElement>(null)
  const selTsakRef = useRef<HTMLDivElement>(null)
  const [acItem, setAcItem] = useState(0)

  useEffect(() => {
    if (taskContent.current) {
      taskContent.current.focus()
      setAcItem(0)
    }
    if (!selected) {
      taskContent.current?.children[0]?.scrollIntoView({ behavior: "smooth" })
    }
  }, [selected])

  useEffect(() => {
    if (!selected) return
    const item = taskContent.current?.children[acItem]
    item?.scrollIntoView({ behavior: "smooth", block: "center" })
    document.addEventListener("keyup", onPressUpDown)
    return () => document.removeEventListener("keyup", onPressUpDown)
  }, [selected, acItem])

  const onPressUpDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      setAcItem(acItem > 0 ? acItem - 1 : 0)
    }
    if (e.key === "ArrowDown") {
      setAcItem(acItem < 19 ? acItem + 1 : 19)
    }
    if (e.key === "Enter") {
      console.log(selTsakRef.current)
    }
  }

  const renderTaskItem = useMemo(() => {
    return new Array(20).fill("").map((_, index) =>
      Children.toArray(
        <div
          className={c(s.task_item, "fs12", {
            [s.task_item_active]: selected && index === acItem,
          })}
          ref={selected && index === acItem ? selTsakRef : null}
        >
          Task{index}
        </div>
      )
    )
  }, [acItem, selected])

  return (
    <div
      className={c(s.panel, "pr", {
        [s.panel_selected]: selected,
      })}
      onClick={() => onClick?.()}
    >
      <div className={c("fs16 bold", s.title)}>{title}</div>
      <div ref={taskContent} className={c("w-full mt10 relative", s.task_content)}>
        {renderTaskItem}
      </div>
    </div>
  )
}

export default TaskPanel
