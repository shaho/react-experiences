import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello people!
      <div>
        <Link to="blog">blog page</Link>
      </div>
      <a href="https:www.gatsbyjs.org">gatsby docs</a>
    </div>
  )
}
