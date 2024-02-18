import React, {Fragment, ReactNode} from 'react'

export type TWrapperProviderProps = {
  children?: ReactNode
  wrapper?(children?: ReactNode): ReactNode
}

/**
 * Component that provides an optional `wrapper` prop for rendering the provided children in a customized wrapper.
 * 
 * ```
 * <WrapperProvider wrapper={(children) => <button>{children}</button>}>
 *   This text will be rendered inside a button!
 * </WrapperProvider>
 * ```
 */

export const WrapperProvider = (props: TWrapperProviderProps) => {
  const children = props.wrapper?.(props.children) || props.children
  if (!children) return null

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
