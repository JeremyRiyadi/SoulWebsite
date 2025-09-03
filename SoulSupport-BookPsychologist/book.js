document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const backButton = document.getElementById("backButton")
  const bookButton = document.getElementById("bookButton")
  const confirmationMessage = document.getElementById("confirmationMessage")
  const backToMainButton = document.getElementById("backToMainButton")
  const dateOptions = document.querySelectorAll(".date-option")
  const timeSlots = document.querySelectorAll(".time-slot")
  const appointmentOptions = document.querySelectorAll(".appointment-option input")

  // Selected values
  let selectedDate = "today"
  let selectedTimeSlot = null
  let selectedAppointmentType = "clinic"

  // Back button functionality
  backButton.addEventListener("click", () => {
    // Navigate to psychologist page
    window.location.href = "psychologist.html"
  })

  // Date selection
  dateOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Skip if it's the date picker button
      if (this.id === "datePicker") {
        // Show date picker
        showDatePicker()
        return
      }

      // Remove active class from all options
      dateOptions.forEach((opt) => opt.classList.remove("active"))

      // Add active class to selected option
      this.classList.add("active")

      // Update selected date
      selectedDate = this.dataset.date
    })
  })

  // Date picker functionality
  function showDatePicker() {
    // Create date input element
    const dateInput = document.createElement("input")
    dateInput.type = "date"
    dateInput.style.position = "absolute"
    dateInput.style.opacity = "0"
    dateInput.style.pointerEvents = "none"

    // Set minimum date to today
    const today = new Date()
    const todayString = today.toISOString().split("T")[0]
    dateInput.min = todayString

    // Set maximum date to 3 months from now
    const maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)
    const maxDateString = maxDate.toISOString().split("T")[0]
    dateInput.max = maxDateString

    document.body.appendChild(dateInput)

    // Trigger the date picker
    dateInput.click()

    // Handle date selection
    dateInput.addEventListener("change", function () {
      const selectedDateValue = this.value
      if (selectedDateValue) {
        // Parse the selected date
        const selected = new Date(selectedDateValue)
        const today = new Date()
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)

        // Remove active class from all date options
        dateOptions.forEach((opt) => opt.classList.remove("active"))

        // Check if selected date is today or tomorrow
        if (selected.toDateString() === today.toDateString()) {
          // Select today option
          const todayOption = document.querySelector('[data-date="today"]')
          if (todayOption) {
            todayOption.classList.add("active")
            selectedDate = "today"
          }
        } else if (selected.toDateString() === tomorrow.toDateString()) {
          // Select tomorrow option
          const tomorrowOption = document.querySelector('[data-date="tomorrow"]')
          if (tomorrowOption) {
            tomorrowOption.classList.add("active")
            selectedDate = "tomorrow"
          }
        } else {
          // Update the date picker button to show selected date
          const datePicker = document.getElementById("datePicker")
          const dateSpan = datePicker.querySelector("span")

          // Format date nicely
          const options = {
            weekday: "short",
            month: "short",
            day: "numeric",
          }
          const formattedDate = selected.toLocaleDateString("en-US", options)

          if (dateSpan) {
            dateSpan.textContent = formattedDate
          }
          datePicker.classList.add("active")
          selectedDate = selectedDateValue
        }
      }

      // Remove the temporary input
      if (document.body.contains(dateInput)) {
        document.body.removeChild(dateInput)
      }
    })

    // Handle if user cancels (clicks outside)
    dateInput.addEventListener("blur", () => {
      setTimeout(() => {
        if (document.body.contains(dateInput)) {
          document.body.removeChild(dateInput)
        }
      }, 100)
    })
  }

  // Time slot selection
  timeSlots.forEach((slot) => {
    slot.addEventListener("click", function () {
      // Remove selected class from all time slots
      timeSlots.forEach((s) => s.classList.remove("selected"))

      // Add selected class to clicked time slot
      this.classList.add("selected")

      // Update selected time slot
      selectedTimeSlot = this.textContent

      console.log("Selected time slot:", selectedTimeSlot) 
    })
  })

  // Appointment type selection
  appointmentOptions.forEach((option) => {
    option.addEventListener("change", function () {
      selectedAppointmentType = this.value
      console.log("Selected appointment type:", selectedAppointmentType) 
    })
  })

  // Book session button
  bookButton.addEventListener("click", () => {
    console.log("Book button clicked")
    console.log("Current selections:", {
      appointmentType: selectedAppointmentType,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
    })

    if (!selectedTimeSlot) {
      alert("Please select a time slot")
      return
    }

    // Show confirmation message
    confirmationMessage.classList.add("active")

    // Auto redirect after 3 seconds
    setTimeout(() => {
      window.location.href = "psychologist.html"
    }, 3000)

    // Log booking details
    console.log("Booking details:", {
      appointmentType: selectedAppointmentType,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
    })
  })

  // Back to main button
  backToMainButton.addEventListener("click", () => {
    // Navigate to psychologist page
    window.location.href = "psychologist.html"
  })
})

document.querySelector('.back-button').addEventListener("click", () => {
  window.location.href = "../SoulSupport-Psychologist/psychologyst.html"
})