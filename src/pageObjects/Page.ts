export default abstract class Page {
    private _path: string;

    public open(path: string): void {
        this._path = path;
        browser.url(path);
    }
}
