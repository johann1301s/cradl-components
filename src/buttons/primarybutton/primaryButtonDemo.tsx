import React from 'react'
import {PrimaryButton} from './primaryButton'
import {ComponentDemo} from '../../common/componentdemo/componentDemo'
import {lorem} from '../../common/lorem'

export const PrimaryButtonDemo = () => {

  return (
    <ComponentDemo
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
        label: lorem[2],
      }}/>
  )
}
