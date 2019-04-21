import React from 'react'

export default ({ src }) =>
  <iframe
    src={src}
    width={1024}
    height={768}
    frameBorder='0'
    allowFullScreen
    style={{
      borderRadius: 8,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.125), 0 0 8px 512px rgba(0, 0, 0, 0.0625)'
    }}
  />
