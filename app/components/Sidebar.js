import { animateSidebarEntrance } from "../utils/animations.js"

const Tab = ({ attrs: { key } }) => {
  return {
    oncreate: animateSidebarEntrance,
    view: ({ attrs: { tab } }) =>
      m(
        m.route.Link,
        {
          class: "tab",
          key,
          id: `${tab}`,
          href: `${tab}`,
        },
        tab.split("/")[1]
      ),
  }
}

const Sidebar = ({ attrs: { model } }) => {
  let tabs = Object.keys(model.reqs.urls)

  return {
    oncreate: animateSidebarEntrance,
    view: ({ attrs: { model } }) =>
      m(
        "aside.sidebar slide-left",
        {
          id: "sidebar",
        },
        tabs.map((tab, idx) =>
          m(Tab, {
            key: idx,
            active: model.state.route == tab,
            tab,
          })
        )
      ),
  }
}

export default Sidebar
