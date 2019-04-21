import React, { useState, useEffect } from 'react'

const Tweet = props => {
  const [ loaded, setLoaded ] = useState(false)
  useEffect(() => {
    const script = document.head.appendChild(
      document.createElement('script')
    )
    script.src = 'https://platform.twitter.com/widgets.js'
    script.onload = () => {
      setTimeout(() => {
        setLoaded(true)
      }, 500)
    }
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div
      style={{
        transform: 'scale(1.5)',
        opacity: loaded ? 1 : 0,
      }}>
      {props.children}
    </div>
  )
}

export const ThemeTweet = () =>
  <Tweet>
    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">I would love to see more standardization around how theming is handled in React so I started a theme specification (which isn&#39;t coupled to Styled System). Tell me what&#39;s missing or why you wouldn&#39;t adopt something like this<a href="https://t.co/SDPUiK4Rr2">https://t.co/SDPUiK4Rr2</a></p>&mdash; Brent Jackson (@jxnblk) <a href="https://twitter.com/jxnblk/status/1107726037805424641?ref_src=twsrc%5Etfw">March 18, 2019</a></blockquote>
  </Tweet>

export const BlocksTweet = () =>
  <Tweet>
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr">
        Spent this morning playing around with exposing a Blocks editor for MDX files in <a href="https://twitter.com/gatsbyjs?ref_src=twsrc%5Etfw">@gatsbyjs</a> dev mode.<br /><br />⚡It&#39;s v hacky and doesn&#39;t even write back out to disk yet, but it&#39;s so fun to be able to edit a running web page directly and even tweak the theme. <a href="https://t.co/xyG78tcVGt">pic.twitter.com/xyG78tcVGt</a>
      </p>
      &mdash; John Otander (@4lpine)
      <a href="https://twitter.com/4lpine/status/1119307881709309952?ref_src=twsrc%5Etfw">April 19, 2019</a>
    </blockquote>
  </Tweet>
