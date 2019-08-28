import React from "react"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Hero />
    <SEO title="Home" />
    <h1 className="w-full text-white bg-red-500 text-5xl">Hi people</h1>
  </>
)

export default IndexPage
