{
  "name": "Custom Reservation Calendar",
  "description": "Calendário de Reservas Personalizado",
  "data": {
    "schema": [
      {
        "name": "Checkin",
        "dataType": "STRING",
        "conceptType": "DIMENSION"
      },
      {
        "name": "Checkout",
        "dataType": "STRING",
        "conceptType": "DIMENSION"
      },
      {
        "name": "Suite",
        "dataType": "STRING",
        "conceptType": "DIMENSION"
      },
      {
        "name": "Status",
        "dataType": "STRING",
        "conceptType": "DIMENSION"
      }
    ]
  },
  "style": {
    "default": {
      "css": "https://example.com/calendar-styles.css"
    }
  },
  "components": {
    "html": "https://example.com/calendar-layout.html",
    "js": "https://example.com/calendar-script.js"
  }
}
