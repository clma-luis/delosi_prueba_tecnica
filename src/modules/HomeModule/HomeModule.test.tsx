import HomeModule from "@/modules/HomeModule";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false, 
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});

describe("HomeModule", () => {
  it("should have the word 'PRUEBA TECNICA DELOSI' in the screen", async () => {
    render(<HomeModule />);
    const myElement = screen.getByText("PRUEBA TECNICA DELOSI");

    expect(myElement).toBeInTheDocument();
  });
});
