import { Cycler } from "react-text-scrambler"
import React from "react"

const texteffect = props => {
  const strings = ["FrontEnd Devloper", "JS Ddevloper", "React.js", "CSS"]
  const characters = "!<>-_\\/[]{}—=+*^?#________"

  return <Cycler duration={1000} strings={strings} characters={characters} />
}

export default texteffect
