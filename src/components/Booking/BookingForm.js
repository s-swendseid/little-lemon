import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit} for="fieldset">
          <fieldset>
            {/* Date Selection */}
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                type="date"
                required
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                required
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            {/* Guests Selection */}
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                value={guests}
                type="number"
                required
                min="1"
                max="12"
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            {/* Occastion occasion */}
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
              </select>
            </div>

            {/* Submit button */}
            <div className="btnReceive">
              <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
