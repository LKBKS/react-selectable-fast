import { Component } from 'react'
import { ReactComponentLike } from 'prop-types'

import { Maybe, TComputedBounds } from './utils'
import { TSelectableItem } from './Selectable.types'
import Selectbox from './Selectbox'
declare type TSelectItemsOptions = {
  isFromClick?: boolean
}
declare type TMouseDownData = {
  selectboxY: number
  selectboxX: number
  target: HTMLElement | null
}
declare type TProcessItemOptions = TSelectItemsOptions & {
  item: TSelectableItem
  tolerance: number
  selectboxBounds: TComputedBounds
  enableDeselect: boolean
  mixedDeselect: boolean
}
export declare type TSelectableGroupProps = {
  globalMouse?: boolean
  ignoreList?: string[]
  scrollSpeed?: number
  minimumSpeedFactor?: number
  allowClickWithoutSelected?: boolean
  className?: string
  clickClassName?: string
  selectboxClassName?: string
  style?: object
  selectionModeClass?: string
  onSelectionClear?: Function
  enableDeselect?: boolean
  mixedDeselect?: boolean
  deselectOnEsc?: boolean
  resetOnStart?: boolean
  disabled?: boolean
  delta?: number
  scrollContainer?: string
  duringSelection?: Function
  onSelectionFinish?: Function
  component?: ReactComponentLike
  tolerance?: number
  fixedPosition?: boolean
}
declare class SelectableGroup extends Component<TSelectableGroupProps> {
  static defaultProps: {
    clickClassName: string
    tolerance: number
    globalMouse: boolean
    ignoreList: never[]
    scrollSpeed: number
    minimumSpeedFactor: number
    duringSelection: () => void
    onSelectionFinish: () => void
    onSelectionClear: () => void
    allowClickWithoutSelected: boolean
    selectionModeClass: string
    resetOnStart: boolean
    disabled: boolean
    deselectOnEsc: boolean
    fixedPosition: boolean
    delta: number
  }
  state: {
    selectionMode: boolean
  }
  mouseDownStarted: boolean
  mouseMoveStarted: boolean
  mouseMoved: boolean
  mouseUpStarted: boolean
  selectionStarted: boolean
  deselectionStarted: boolean
  clickedItem?: TSelectableItem
  mouseDownData: TMouseDownData
  registry: Set<TSelectableItem>
  selectedItems: Set<TSelectableItem>
  selectingItems: Set<TSelectableItem>
  ignoreCheckCache: Map<HTMLElement, Boolean>
  ignoreList: string[]
  ignoreListNodes: HTMLElement[]
  selectbox: Maybe<Selectbox>
  selectableGroup: Maybe<HTMLElement>
  scrollContainer: Maybe<HTMLElement>
  maxScrollTop: number
  maxScrollLeft: number
  scrollBounds: Maybe<DOMRect | ClientRect>
  componentDidMount(): void
  componentWillUnmount(): void
  removeTempEventListeners(): void
  updateRootBounds(): void
  updateRegistry: () => void
  registerSelectable: (selectableItem: TSelectableItem) => void
  unregisterSelectable: (selectableItem: TSelectableItem) => void
  toggleSelectionMode(): void
  private updateContainerScroll
  getScrollStep: (offset: number) => number
  checkScrollTop: (clientY: number, currentTop: number) => void
  checkScrollBottom: (clientY: number, currentTop: number) => void
  checkScrollLeft: (clientX: number, currentLeft: number) => void
  checkScrollRight: (clientX: number, currentLeft: number) => void
  updateSelectBox: (event: Event) => void
  updateSelecting: () => void
  selectItems: (selectboxBounds: TComputedBounds, options?: TSelectItemsOptions) => void
  processItem(
    options: TProcessItemOptions
  ):
    | boolean
    | TSelectableItem
    | {
        updateSelecting: boolean
      }
    | null
  clearSelection: () => void
  selectAll: () => void
  isInIgnoreList(target: HTMLElement | null): Boolean | undefined
  updateWhiteListNodes(): void
  mouseDown: (e: Event) => void
  preventEvent(target: HTMLElement, type: string): void
  private mouseUp
  handleClick(evt: any, top: number, left: number): void
  keyListener: (evt: KeyboardEvent) => void
  cleanUp(): void
  getGroupRef: (ref: HTMLElement | null) => void
  getSelectboxRef: (ref: Maybe<Selectbox>) => void
  defaultContainerStyle: {
    position: string
  }
  contextValue: {
    selectable: {
      register: (selectableItem: TSelectableItem) => void
      unregister: (selectableItem: TSelectableItem) => void
      selectAll: () => void
      clearSelection: () => void
      getScrolledContainer: () => HTMLElement | null
    }
  }
  render(): JSX.Element
}
export default SelectableGroup
