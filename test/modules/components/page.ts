export default abstract class Page {
  protected static url: string

  static async open(): Promise<any> {
    await page.goto(this.url)
  }

  async getTitle(): Promise<string> {
    return page.title()
  }
}
