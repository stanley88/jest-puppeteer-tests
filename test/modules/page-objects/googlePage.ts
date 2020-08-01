import Page from "../components/page";
import { element } from "../components/element";

export default class GooglePage extends Page {
  protected static url = 'http://google.com'

  constructor() {
    super()
  }

  searchInput = element('#searchform')
  searchButton = element('input.gNO89b')

  static async open(): Promise<GooglePage> {
    await super.open()
    return new GooglePage
  }

  async search(searchText: string): Promise<GooglePage> {
    await this.searchInput.setValue(searchText)
    await this.searchButton.click()

    await page.waitForNavigation()
    return new GooglePage
  }
}
