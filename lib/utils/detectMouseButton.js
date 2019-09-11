'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function detectMouseButton(evt, buttonNumber) {
  if (buttonNumber === void 0) {
    buttonNumber = 1
  }
  if ('buttons' in evt) {
    return evt.buttons === buttonNumber
  }
  if ('which' in evt) {
    return evt.which === buttonNumber
  }
  return evt.button === buttonNumber - 1
}
exports.detectMouseButton = detectMouseButton
//# sourceMappingURL=detectMouseButton.js.map
