import { CSSTransitionClassNames } from "react-transition-group/CSSTransition"

export const resolveClassName = (
  className?: string,
  s?: CSSModuleClasses,
  appear?: boolean
): CSSTransitionClassNames => {
  if (!className || !s) return {}
  return appear
    ? {
        appear: s[`${className}_appear`],
        appearActive: s[`${className}_appear_active`],
        appearDone: s[`${className}_appear_done`],
      }
    : {
        enter: s[`${className}_enter`],
        enterActive: s[`${className}_enter_active`],
        exit: s[`${className}_exit`],
        exitActive: s[`${className}_exit_active`],
      }
}
