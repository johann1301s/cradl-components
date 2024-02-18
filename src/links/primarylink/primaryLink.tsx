import React, {CSSProperties} from 'react'
import {PrimaryTrigger} from '../../triggers/primarytrigger/primaryTrigger'

export type TPrimaryButtonProps = {
  label?: string
  className?: string
  style?: CSSProperties
  onClick?(): void
}

export const PrimaryLink = (props: TPrimaryButtonProps) => {

  return (
    <PrimaryTrigger
      label={props.label}
      className={props.className}
      style={props.style}
      wrapper={(primaryTrigger) => (
        <a
          onClick={() => props.onClick?.()}>
          {primaryTrigger}
        </a>
      )}/>
  )
}
