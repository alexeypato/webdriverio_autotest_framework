/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint @typescript-eslint/no-unused-vars: "off" */
export function focusLastOpenedWindow(obsolete: string): void {
  const lastWindowHandle = browser.getWindowHandles().slice(-1)[0];

  browser.switchToWindow(lastWindowHandle);
}
