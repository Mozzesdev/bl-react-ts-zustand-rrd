import { render, screen } from "@/__tests__/utils/test-utils";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Header from "@/components/layout/Header";
import { useAppStore } from "@/store/store";
import { act } from "react";

const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

describe("Header", () => {
  beforeEach(() => {
    act(() => {
      useAppStore.setState(useAppStore.getState());
    });
    vi.clearAllMocks();
  });

  it("should render login link when user is not authenticated", () => {
    act(() => {
      useAppStore.setState({ status: "unauthenticated" });
    });

    render(<Header />);
    expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /dashboard/i })
    ).not.toBeInTheDocument();
  });

  it("should render dashboard and logout when user is authenticated", () => {
    act(() => {
      useAppStore.setState({
        status: "authenticated",
        user: { id: "1", name: "Test User", email: "test@test.com" },
        token: "fake-token",
      });
    });

    render(<Header />);
    expect(
      screen.getByRole("link", { name: /dashboard/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });
});
