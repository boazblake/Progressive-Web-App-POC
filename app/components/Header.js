import Hamburger from "./Hamburger.js"
import {
  animateChildrenLimitsEntrance,
  animateChildrenLimitsExit,
  animate,
} from "../utils/animations.js"

const Selector = {
  view: ({ attrs: { model } }) =>
    m(
      ".limits",
      model.limits.map((limit, idx) =>
        m(
          "button.btn.limit",
          {
            oncreate: animateChildrenLimitsEntrance(idx),
            onbeforeremove: animateChildrenLimitsExit,
            onclick: () => {
              model.state.limit = limit
              model.state.showLimits = false
            },
            key: idx,
          },
          limit
        )
      )
    ),
}

const ChangeLimits = {
  view: ({ attrs: { model } }) =>
    m(".changeLimits", [
      m(
        "button.changeLimitBtn",
        {
          onclick: () => model.toggleLimits(model),
        },
        "Change Limit"
      ),
      model.state.showLimits && m(Selector, { model }),
    ]),
}

const Header = {
  oncreate: animate("slideDown"),
  view: ({ attrs: { model } }) =>
    m(
      "header.header",
      {
        id: "header",
      },
      [m(Hamburger, { model }), m(ChangeLimits, { model })]
    ),
}

export default Header
