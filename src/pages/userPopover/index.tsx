import Icon from "@/components/icon"
import c from "classnames"
import s from "./index.module.less"

const UserPopover = () => {
  return (
    <div className={c(s.user_popover)}>
      <section className={c(s.top, "h-142 p-20 fbv fbac fbjc")}>
        <Icon name="user" size={40} />
        <div className={c("fs16 bold")}>user</div>
        <div className={c("mt-4 fs12", s.gray_font)}>默认机构</div>
      </section>

      <section className={c(s.bottom, "cursor-pointer h-48 fbh fbjc fbac")}>退出登录</section>
    </div>
  )
}

export default UserPopover
