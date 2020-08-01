import { ElementHandle, Page } from 'puppeteer'
import { AssertionError } from 'assert'

export class Element {
// private locator: string
// private page: Page
  private elementHandle: ElementHandle | null = null

  constructor(private locator: string, private page: Page) {
    // this.locator = locator
    // this.page = page
  }

  async setValue(text: string): Promise<void> {
    const element = await this.getElementHandle()
    await element.type(text)
  }

  async click(): Promise<void> {
    const element = await this.getElementHandle()
    await element.click()
  }

  private async getElementHandle(): Promise<ElementHandle> {
    if (this.elementHandle) {
      return this.elementHandle;
    }
    const element = await this.page.$(this.locator)
    if (element) {
      return this.elementHandle = element
    }
    throw new Error(`Element with locator ${this.locator} not found`)
  }

  private async getElementHandleX(): Promise<ElementHandle | null> {
    if (this.elementHandle) {
      return this.elementHandle;
    }
    return this.elementHandle = await this.page.$(this.locator)
  }
}

export function element(locatorString: string) {
  return new Element(locatorString, page)
}
