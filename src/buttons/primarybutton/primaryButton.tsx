import React, {CSSProperties} from 'react'
import {PrimaryTrigger} from '../../triggers/primarytrigger/primaryTrigger'

export type TPrimaryButtonProps = {
  disabled?: boolean
  label?: string
  className?: string
  style?: CSSProperties
  onClick?(): void
}

export const PrimaryButton = (props: TPrimaryButtonProps) => {

  return (
    <PrimaryTrigger
      label={props.label}
      className={props.className}
      style={props.style}
      wrapper={(primaryTrigger) => (
        <button
          onClick={() => props.onClick?.()}
          disabled={props.disabled}>
          {primaryTrigger}
        </button>
      )}/>
  )
}
