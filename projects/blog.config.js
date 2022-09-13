module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture }) {
    await page.setViewport({ width: 1280, height: 720 })

    await page.goto('https://pickyzz.dev')
    await capture(page, 'initial')
    await page.goto('https://pickyzz.dev/about')
    await capture(page, 'about')
    await page.goto('https://pickyzz.dev/blog')
    await capture(page, 'posts')
  },
})