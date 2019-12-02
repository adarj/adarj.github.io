import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  const title = "Akil Darjean"

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
    </Helmet>
  )
}

export default SEO
