/**
 * Unit Tests = Tests one isolated unit/piece of code eg a function
 * NB: Has some input and expects a result
 */
const generateText = (name, role) => {
  return `${name} (${role} engineer)`;
};

test("should output name and role", () => {
  const text = generateText("Norman", "Front-end");
  expect(text).toBe("Norman (Front-end enginner)");
});

/**
 * Integration Tests = Tests combination of features eg a function calling another function
 */
const validateInput = () => {};

const checkAndGenerate = (name, role) => {
  if (!validateInput(name, true, false) || !validateInput(role, false, true)) {
    return false;
  }
  return generateText(name, role);
};

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Norman", "Front-end");
  expect(text).toBe("Norman (Front-end engineer)");
});
/**
 * End to End/ UI Tests = Tests a full interaction path in your app eg signup process
 * desc: these tests simulate a certain user interaction flow with your app eg clicking, entering text. Need a browser JS environment.
 */

test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("localhost:3000/your-page");
  await page.click("input#name");
  await page.type("input#name", "Norman");
  await page.click("input#role");
  await page.type("input#role", "Front-end");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Norman (Front-end engineer)");
}, 10000);
