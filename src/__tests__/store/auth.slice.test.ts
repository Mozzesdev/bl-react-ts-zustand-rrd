import { describe, it, expect, beforeEach, vi, type Mock } from "vitest";
import { useAppStore } from "@/store/store"; // Usamos el alias @
import { authService } from "@/services/auth.service"; // Usamos el alias @
import { act } from "react";

vi.mock("@/services/auth.service", () => ({
  authService: {
    login: vi.fn(),
  },
}));

describe("authSlice", () => {
  const initialState = useAppStore.getState();

  beforeEach(() => {
    act(() => {
      useAppStore.setState(initialState, true);
    });
    vi.clearAllMocks();
  });

  it("should handle login action successfully", async () => {
    const mockUser = { id: "1", name: "Test", email: "test@test.com" };
    const mockToken = "fake-jwt-token";
    const mockCredentials = { email: "test@test.com", password: "password" };

    (authService.login as Mock).mockResolvedValue({
      user: mockUser,
      token: mockToken,
    });

    await act(() => useAppStore.getState().login(mockCredentials));

    const state = useAppStore.getState();
    expect(state.status).toBe("authenticated");
    expect(state.user).toEqual(mockUser);
    expect(state.token).toBe(mockToken);
  });

  it("should handle login action failure", async () => {
    const mockError = new Error("Credenciales inválidas");
    const mockCredentials = { email: "wrong@test.com", password: "wrong" };

    (authService.login as Mock).mockRejectedValue(mockError);

    await expect(
      act(() => useAppStore.getState().login(mockCredentials))
    ).rejects.toThrow(mockError.message);

    const state = useAppStore.getState();
    expect(state.status).toBe("unauthenticated");
    expect(state.error).toBe(mockError.message);
  });
});
