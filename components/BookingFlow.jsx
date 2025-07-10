import React, { useState } from 'react';

function BookingFlow() {
  const [destination, setDestination] = useState('');
  const [step, setStep] = useState(1);

  const handleBooking = () => {
    alert(`Buggy geboekt naar ${destination}!`);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-2xl shadow-lg max-w-md mx-auto">
      {step === 1 && (
        <div>
          <label className="block mb-2 font-semibold">Kies je bestemming:</label>
          <select
            className="w-full p-2 rounded"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">-- Selecteer --</option>
            <option value="Mambo Beach">Mambo Beach</option>
            <option value="Jan Thiel">Jan Thiel</option>
            <option value="Playa Porto Mari">Playa Porto Mari</option>
          </select>
          <button
            className="mt-4 bg-black text-white px-4 py-2 rounded"
            onClick={() => setStep(2)}
            disabled={!destination}
          >
            Volgende
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="mb-4">Verwachte aankomsttijd: <strong>15 minuten</strong></p>
          <img src="/images/map-tracking-demo.png" alt="Live tracking" className="w-full rounded mb-4" />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleBooking}
          >
            Bevestig Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default BookingFlow;
