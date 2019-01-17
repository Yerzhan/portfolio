import React from 'react'
import { Trail, animated } from 'react-spring'

export default class Skills extends React.PureComponent {
  items = [
    {
      skill: "Java",
      level: "ninja"
    },
    {
      skill: "JavaScript",
      level: "expert"
    },
    {
      skill: "ReactJS",
      level: "advanced"
    },
    {
      skill: "Backend Development",
      level: "ninja"
    },
    {
      skill: "Frontend Development",
      level: "expert"
    },
    {
      skill: "Web Services",
      level: "advanced"
    },
    {
      skill: "Mobile Applications",
      level: "good"
    },
    {
      skill: "Software Architecture",
      level: "expert"
    }
  ]

  state = { items: this.items }
  
  render() {
    const { items } = this.state
    return (
      <div className="skills">
        <ul>
          <Trail
            native
            items={items}
            from={{ opacity: 0, x: -100 }}
            to={{ opacity:  1, x: 0 }}>
            {item =>({ x, opacity }) => (
              <animated.li
                style={{
                  opacity,
                  transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                }}
              >
                <span className={item.level}></span><em>{item.skill}</em>
              </animated.li>
            )}
          </Trail>
        </ul>
      </div>
    )
  }
}