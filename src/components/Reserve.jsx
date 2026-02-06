const Reserve = () => {
  return (
    <div>
      <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/2">
        <img
          class="rounded-lg w-full h-auto"
          src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob25lJTIwY2FsbHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div class="md:w-1/2">
        <div class="mb-6">
          <h1 class="text-3xl font-bold">
            Are you ready for a fish experience 🐋🐋?
            <span class="text-red-600">Let's make you a reservation!</span>
          </h1>
          <p class="text-lg mb-4">
            Reserve your table now and enjoy a delightful dining experience with
            us. any time and any day of the week we have a special place for you
            at the ready.
          </p>
        </div>
        <form class="flex flex-col gap-4">
          <div>
            <div class="font-semibold mb-1">Email</div>
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <div class="font-semibold mb-1">Phone</div>
            <input
              type="tel"
              class="w-full p-2 border rounded"
              placeholder="Phone"
              required
            />
          </div>
          <div>
            <div class="font-semibold mb-1">Date</div>
            <input
              type="date"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <div class="font-semibold mb-1">Time</div>
            <input
              type="time"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <div class="font-semibold mb-1">Party Size</div>
            <input
              type="number"
              class="w-full p-2 border rounded"
              placeholder="No. of people"
              required
            />
          </div>
          <div>
            <div class="font-semibold mb-1">Special Requests</div>
            <textarea
              class="w-full p-2 border rounded"
              placeholder="Any more information"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Reserve