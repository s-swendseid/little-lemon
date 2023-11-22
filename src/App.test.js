import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/Booking/BookingForm";
import { initialTimes, updateTimes } from "./components/Main/Main";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reserve table");
  expect(headingElement).toBeInTheDocument();
});

// Mock the fetchAPI function for testing purposes
jest.mock("./yourAPIFile", () => ({
  fetchAPI: jest.fn(() => ["5:00", "11:30", "7:00"]),
}));

// Test suite for initializeTimes
describe("initialTimes", () => {
  it("should return the correct initial times", () => {
    // Act
    const initialState = initialTimes();

    // Assert
    expect(initialState.availableTimes).toEqual(["5:00", "11:30", "7:00"]);
  });
});

// Test suite for updateTimes
describe("updateTimes", () => {
  it("should return the updated times based on the selected date", () => {
    // Arrange
    const currentDate = new Date();
    const currentState = { availableTimes: ["5:00", "11:30", "7:00"] };

    // Act
    const updatedState = updateTimes(currentState, currentDate);

    // Assert
    expect(updatedState.availableTimes).toEqual(["5:00", "11:30", "7:00"]);
  });
});


/* Form validatons */

describe('BookingForm', () => {
  // Test for HTML5 validation attributes
  it('should have HTML5 validation attributes', () => {
    render(<BookingForm />);

    // Test Date input
    const dateInput = screen.getByLabelText('Choose Date');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();

    // Test Time selection
    const timeSelect = screen.getByLabelText('Choose Time');
    expect(timeSelect).toHaveAttribute('required');

    // Test Guests input
    const guestsInput = screen.getByLabelText('Number of Guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '12');

    // Test Occasion selection
    const occasionSelect = screen.getByLabelText('Cccasion');
    expect(occasionSelect).toHaveAttribute('required');
  });

  // Test suite for JavaScript validation functions
  describe('JavaScript validation functions', () => {
    // Test valid and invalid states for your validation functions
    it('should validate the "Number of Guests" input field', () => {
      render(<BookingForm />);

      // Get the Guests input field
      const guestsInput = screen.getByLabelText('Number of Guests');

      // Simulate a valid input (between 1 and 12)
      fireEvent.change(guestsInput, { target: { value: '5' } });
      expect(guestsInput).toHaveValue('5');
      expect(guestsInput).not.toHaveClass('invalid'); // Assuming you add a CSS class for invalid state

      // Simulate an invalid input (less than 1)
      fireEvent.change(guestsInput, { target: { value: '0' } });
      expect(guestsInput).toHaveValue('0');
      expect(guestsInput).toHaveClass('invalid'); // Assuming you add a CSS class for invalid state
    });
  });


});