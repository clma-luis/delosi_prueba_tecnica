import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Footer from ".";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;
useRouterMock.mockImplementation(() => ({
  push: jest.fn(), 
}));



describe("NavbarComponent", () => {
  it("should have the word 'DESOLSI' in the screen", async () => {
    render(<Footer />);
    const myElement = screen.getByText("DELOSI");

    expect(myElement).toBeInTheDocument();
  });
});
