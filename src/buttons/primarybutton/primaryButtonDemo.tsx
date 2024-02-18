import React from 'react'
import {PrimaryButton} from './primaryButton'
import {ComponentDemo} from '../../common/componentdemo/componentDemo'

export const PrimaryButtonDemo = () => {

  return (
    <ComponentDemo
      dark
      title={'PrimaryButton'}
      component={PrimaryButton}
      componentPropList={{
          label: null,
          disabled: null,
          className: null,
          style: null,
          onClick: null
      }}
      componentProps={{
        label: 'Sign in',
      }}/>
  )
}
