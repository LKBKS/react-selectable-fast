import React from 'react'

import { TComputedBounds, TGetBoundsForNodeArgs } from './utils'
import { TSelectableItemState } from './Selectable.types'
declare const createSelectable: (
  WrappedComponent: React.ComponentType<any>
) => {
  new (props: Readonly<any>): {
    state: {
      isSelected: any
      isSelecting: boolean
    }
    node: HTMLElement | null
    bounds: import('./utils').Maybe<TComputedBounds>
    componentDidMount(): void
    componentWillUnmount(): void
    registerSelectable: (containerScroll?: TGetBoundsForNodeArgs | undefined) => void
    getSelectableRef: (ref: HTMLElement | null) => void
    render(): JSX.Element
    context: any
    setState<K extends 'isSelected' | 'isSelecting'>(
      state:
        | TSelectableItemState
        | ((
            prevState: Readonly<TSelectableItemState>,
            props: Readonly<any>
          ) => TSelectableItemState | Pick<TSelectableItemState, K> | null)
        | Pick<TSelectableItemState, K>
        | null,
      callback?: (() => void) | undefined
    ): void
    forceUpdate(callBack?: (() => void) | undefined): void
    readonly props: Readonly<any> &
      Readonly<{
        children?: React.ReactNode
      }>
    refs: {
      [key: string]: React.ReactInstance
    }
  }
  new (props: any, context?: any): {
    state: {
      isSelected: any
      isSelecting: boolean
    }
    node: HTMLElement | null
    bounds: import('./utils').Maybe<TComputedBounds>
    componentDidMount(): void
    componentWillUnmount(): void
    registerSelectable: (containerScroll?: TGetBoundsForNodeArgs | undefined) => void
    getSelectableRef: (ref: HTMLElement | null) => void
    render(): JSX.Element
    context: any
    setState<K extends 'isSelected' | 'isSelecting'>(
      state:
        | TSelectableItemState
        | ((
            prevState: Readonly<TSelectableItemState>,
            props: Readonly<any>
          ) => TSelectableItemState | Pick<TSelectableItemState, K> | null)
        | Pick<TSelectableItemState, K>
        | null,
      callback?: (() => void) | undefined
    ): void
    forceUpdate(callBack?: (() => void) | undefined): void
    readonly props: Readonly<any> &
      Readonly<{
        children?: React.ReactNode
      }>
    refs: {
      [key: string]: React.ReactInstance
    }
  }
  contextType: React.Context<import('./Selectable.types').TSelectableGroupContext>
  propTypes: {
    isSelected: import('prop-types').Requireable<boolean>
  }
  defaultProps: {
    isSelected: boolean
  }
}
export default createSelectable
