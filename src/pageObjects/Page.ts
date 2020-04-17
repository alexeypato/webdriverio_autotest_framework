export default abstract class Page {
    public open(path: string): void {
        browser.url(path);
    }
}
