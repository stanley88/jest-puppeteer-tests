import GooglePage from "./modules/page-objects/googlePage"

describe('Google page interactions', () => {
  let googlePage: GooglePage

  beforeAll(async () => {
    googlePage = await GooglePage.open()
  })

  it('Should display proper title', async () => {
    await expect(googlePage.getTitle()).resolves.toMatch('Google')
  })

  it('Should perform search', async () => {
    // googlePage = await googlePage.search('Warsaw')
    await googlePage.search('Warsaw')

    await expect(googlePage.getTitle()).resolves.toMatch('Warsaw')
  })

  it('calculate percentage string', async () => {
    const count: number = 978
    const total: number = 1000

    let percentage: string = (count / total * 100 + '').match(/^99\.9*[1-8]?|^\d+(:?\.\d)?|.*/)![0]

    expect(percentage).toMatch('100')
  })
})
