// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function switchToFrame(selector: string) {
  browser.switchToFrame($(selector));
}
