/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/core'
import dark from '@mdx-deck/themes/dark'
import { EditProvider, FieldSet, ResetButton } from '@styled-system/edit'

console.log(dark)

const Fixed = props =>
  <div
    {...props}
    css={{
      position: 'fixed',
      right: 0,
      bottom: 0,
      margin: 8,
    }}
  />

const Editor = props => {
  const [ open, setOpen ] = useState(false)

  if (!open) {
    return (
      <Fixed
        css={{
          opacity: 0,
          '&:hover': {
            opacity: 1,
          }
        }}>
        <button
          onClick={e => {
            setOpen(!open)
          }}>
          Edit
        </button>
      </Fixed>
    )
  }
  return (
    <Fixed
      css={{
        padding: 8,
        backgroundColor: 'white',
      }}>
      <ResetButton>Reset</ResetButton>
      <button
        onClick={e => {
          setOpen(!open)
        }}>
        Done
      </button>
      <FieldSet name='colors' type='color' />
    </Fixed>
  )
}

const Provider = props =>
  <EditProvider>
    {props.children}
    <Editor />
  </EditProvider>

export const theme = {
  colors: {
    code: '#222',
  },
  css: {
    textAlign: 'center',
    svg: {
      margin: 'auto !important',
    }
  },
  pre: {
    lineHeight: 1.5,
  },
  Provider,
}
