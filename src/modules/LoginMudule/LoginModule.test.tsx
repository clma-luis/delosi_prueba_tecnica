import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { useRouter } from "next/navigation";
import LoginModule from ".";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;
useRouterMock.mockImplementation(() => ({
  push: jest.fn(), 
}));

describe("LoginModule", () => {
  it('should have the word "DELOSI" on the screen', () => {
    const { getByText } = render(<LoginModule />);

    const delosiText = getByText("DELOSI");

    expect(delosiText).toBeInTheDocument();
  });

  it("should update email and password fields correctly", () => {
    const { getByLabelText } = render(<LoginModule />);

    const emailInput = getByLabelText("Correo");
    const passwordInput = getByLabelText("Contraseña");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });
});
