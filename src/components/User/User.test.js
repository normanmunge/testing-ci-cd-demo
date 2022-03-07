/**
 * Tests:
 * 1. While request is in progress, a loading text should be visibile
 * 2. Afterwards, a user's name should be rendered in document.
 * 3. In case of an error, an error message should be rendered.
 */
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./../../App";

describe("Testing User Component", () => {
  test("loading test is shown while API request is in progress", async () => {
    render(<App />);
    const loading = screen.getByText("Loading...");
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
  });

  test("user's name is rendered", async () => {
    //mocking the api is a good technique to avoid HTTP Requests, for unit tests, we only care about the code not whether browser works.
    window.fetch = jest.fn(() => {
      const user = { name: "Norman", email: "nmunge@ounic.co" };

      return Promise.resolve({
        json: () => Promise.resolve(user),
      });
    });

    render(<App />);
    const userName = await screen.findByText("Norman");
    expect(userName).toBeInTheDocument();
  });

  test("error is shown", async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: "API is down" });
    });

    render(<App />);
    const errorMessage = await screen.findByText("API is down");
    expect(errorMessage).toBeInTheDocument();
  });
});
