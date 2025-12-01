import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/store/slices/counterSlice";
import Counter from "./Counter";

const createTestStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

describe("Counter Component", () => {
  it("renders with initial count of 0", () => {
    const store = createTestStore();
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(getByText("0")).toBeInTheDocument();
  });

  it("increments count when + button is clicked", async () => {
    const user = userEvent.setup();
    const store = createTestStore();
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const incrementButton = getByText("+");
    await user.click(incrementButton);

    expect(getByText("1")).toBeInTheDocument();
  });

  it("decrements count when - button is clicked", async () => {
    const user = userEvent.setup();
    const store = createTestStore();
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const decrementButton = getByText("-");
    await user.click(decrementButton);

    expect(getByText("-1")).toBeInTheDocument();
  });

  it("resets count when Reset button is clicked", async () => {
    const user = userEvent.setup();
    const store = createTestStore();
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const incrementButton = getByText("+");
    const resetButton = getByText("Reset");

    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(getByText("2")).toBeInTheDocument();

    await user.click(resetButton);
    expect(getByText("0")).toBeInTheDocument();
  });
});
