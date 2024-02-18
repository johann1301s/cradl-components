import React from 'react'
import {PrimaryLink} from './primaryLink'
import {ComponentDemo} from '../../common/componentdemo/componentDemo'

export const PrimaryLinkDemo = () => {

  return (
    <ComponentDemo
      dark
      title={'PrimaryLink'}
      component={PrimaryLink}
      componentPropList={{
          label: null,
          className: null,
          style: null,
          onClick: null
      }}
      componentProps={{
        label: 'Sign in',
      }}/>
  )
}
