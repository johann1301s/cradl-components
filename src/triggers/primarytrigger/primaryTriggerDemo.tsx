import React from 'react'
import {PrimaryTrigger} from './primaryTrigger'
import {ComponentDemo} from '../../common/componentdemo/componentDemo'

export const PrimaryTriggerDemo = () => {

  return (
    <ComponentDemo
      dark
      title={'PrimaryTrigger'}
      component={PrimaryTrigger}
      componentPropList={{
        label: null,
        wrapper: null,
        style: null, 
        className: null,
      }}
      componentProps={{
        label: 'Sign in'
      }}/>
  )
}
