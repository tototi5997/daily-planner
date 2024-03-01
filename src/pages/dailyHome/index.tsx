import { useEffect, useState } from "react"
import s from "./index.module.less"
import c from "classnames"
import dayjs from "dayjs"
import TaskPanel from "@/components/task-panel"
import { CSSTransition } from "react-transition-group"
import { resolveClassName } from "@/utils/resolve-classname"

enum BoxType {
  TODO,
  PROCESSING,
  DONE,
}

const DailyHome = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("YYYY/MM/DD HH:mm:ss"))
  const [showPanel, setPanel] = useState(false)
  const [selBoxType, setSelBoxType] = useState<BoxType>(BoxType.PROCESSING)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().format("YYYY/MM/DD HH:mm:ss"))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keyup", onPressEnter)
    return () => {
      document.removeEventListener("keyup", onPressEnter)
    }
  }, [selBoxType, showPanel])

  const handleClickStart = () => {
    setPanel(true)
    setSelBoxType(BoxType.PROCESSING)
  }

  const handleClickArrowLeft = () => {
    setSelBoxType(selBoxType === 0 ? 2 : selBoxType - 1)
  }

  const handleClickArrowRight = () => {
    setSelBoxType(selBoxType === 2 ? 0 : selBoxType + 1)
  }

  const onClickPanel = (key: BoxType) => () => {
    setSelBoxType(key)
  }

  const onPressEnter = (e: KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        if (showPanel) return
        handleClickStart()
        break
      case "Escape":
        setPanel(false)
        break
      case "ArrowLeft":
        handleClickArrowLeft()
        break
      case "ArrowRight":
        handleClickArrowRight()
        break
    }
  }

  return (
    <div
      className={c(s.home, "flex items-center justify-center gap-20 usn", {
        "flex-row": showPanel,
        "flex-col": !showPanel,
      })}
    >
      <CSSTransition in={!showPanel} timeout={300} classNames={resolveClassName("label", s)} unmountOnExit>
        <div className={c("fs16")}>Current time is:</div>
      </CSSTransition>
      <CSSTransition in={!showPanel} timeout={300} classNames={resolveClassName("time", s)}>
        <div
          className={c(s.time, "fs22", {
            [s.time_panel]: showPanel,
          })}
        >
          {currentTime}
        </div>
      </CSSTransition>
      <span className={c(s.start_text, "hand fs16", { hide: showPanel })} onClick={handleClickStart}>
        start
      </span>
      <span className={c("fs12", { hide: showPanel })}>Click or Press to start the day !</span>

      <CSSTransition in={showPanel} timeout={300} classNames={resolveClassName("panel", s)} unmountOnExit>
        <section className={c("flex gp40")}>
          <TaskPanel title="TODO" selected={selBoxType === BoxType.TODO} onClick={onClickPanel(BoxType.TODO)} />
          <TaskPanel
            title="PROCESSING"
            selected={selBoxType === BoxType.PROCESSING}
            onClick={onClickPanel(BoxType.PROCESSING)}
          />
          <TaskPanel title="DONE" selected={selBoxType === BoxType.DONE} onClick={onClickPanel(BoxType.DONE)} />
        </section>
      </CSSTransition>
    </div>
  )
}

export default DailyHome
