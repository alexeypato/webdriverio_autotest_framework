/**
 * Wait for the given element to become visible
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 */
export function waitForDisplayed(selector: string, falseCase: string): boolean {
    const ms = 10000;
    return $(selector).waitForDisplayed({ timeout: ms, reverse: !!falseCase });
}
