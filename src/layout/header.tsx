import { Badge } from "antd"
import UserPopover from "@/pages/userPopover"
import IconButton from "@/components/iconButton"
import Icon from "@/components/icon"
import User from "@/components/User"
import c from "classnames"
import s from "./index.module.less"

const Header = () => {
  return (
    <div className={c(s.header, "h-50 w-full flex items-center p-20")}>
      <Icon name="favicon" />
      <div className="fs16 pl28">Platfrom Name</div>

      <section className={c(s.header_right, "flex gap-20")}>
        <Badge count={10} dot size="small">
          <IconButton name="alarm" title="Infomation" />
        </Badge>
        <IconButton name="setting" title="Setting" />
        <User className={c(s.user_icon)} popContent={UserPopover} />
      </section>
    </div>
  )
}

export default Header
