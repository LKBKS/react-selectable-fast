'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function getDocumentScroll() {
  var documentScrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  )
  var documentScrollLeft = Math.max(
    window.pageXOffset,
    document.documentElement.scrollLeft,
    document.body.scrollLeft
  )
  return { documentScrollTop: documentScrollTop, documentScrollLeft: documentScrollLeft }
}
exports.getDocumentScroll = getDocumentScroll
function getBoundsForNode(node, containerScroll) {
  if (containerScroll === void 0) {
    containerScroll = { scrollTop: 0, scrollLeft: 0 }
  }
  var scrollTop = containerScroll.scrollTop,
    scrollLeft = containerScroll.scrollLeft
  var _a = getDocumentScroll(),
    documentScrollTop = _a.documentScrollTop,
    documentScrollLeft = _a.documentScrollLeft
  var rect = node.getBoundingClientRect()
  return {
    top: rect.top + documentScrollTop + scrollTop,
    left: rect.left + documentScrollLeft + scrollLeft,
    offsetWidth: node.offsetWidth,
    offsetHeight: node.offsetHeight,
    width: rect.width,
    height: rect.height
  }
}
exports.getBoundsForNode = getBoundsForNode
//# sourceMappingURL=getBoundsForNode.js.map
