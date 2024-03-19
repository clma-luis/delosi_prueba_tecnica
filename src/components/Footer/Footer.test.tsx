import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Footer from ".";


describe("FooterComponent", () => {
  it("should have the word 'Powered by' in the screen", async () => {
    render(<Footer />);
    const myElement = screen.getByText("Powered by");

    expect(myElement).toBeInTheDocument();
  });
});
