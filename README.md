# Weather Dashboard Frontend

This project provides a user-friendly interface for checking current weather conditions for various cities using a backend weather API. The frontend is developed in HTML, CSS, and JavaScript and supports features like live search, dynamic updates, and a search history stored in the browser's local storage.

## Features

- **Search Weather by City**: Users can input a city name to fetch and display current weather details.
- **Search History**: Keeps track of the last five searched cities, allowing quick access to previous searches.
- **Responsive Design**: Adapts to different screen sizes for a better user experience.
- **Error Handling**: Displays appropriate error messages for invalid city names or API issues.
- **Local Storage**: Saves search history locally to retain it across page reloads.

## Project Structure

```
/frontend
├── index.html      # Main HTML file
├── scripts.js      # JavaScript logic for weather dashboard
├── styles.css      # Stylesheet for the application
```

## Dependencies

This project assumes the following setup:
- A backend API running at `http://localhost:3000` with a `/weather` endpoint.
- The backend API should support GET requests with a `city` query parameter and return weather data in JSON format.

Example API response:
```json
{
  "name": "London",
  "region": "England",
  "country": "United Kingdom",
  "temperature": 15,
  "feelsLike": 14,
  "condition": "Cloudy",
  "conditionIcon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
  "humidity": 70,
  "windSpeed": 10,
  "lastUpdated": "2025-01-14 10:00"
}
```

## How to Run

1. Clone the repository and navigate to the `frontend` directory.
2. Ensure the backend server is running and accessible at `http://localhost:3000`.
3. Open the `index.html` file in any modern web browser.

## Usage

1. **Search for Weather:**
   - Enter a city name in the input box.
   - Click on the "Search" button or press `Enter` to fetch weather details.

2. **View Weather Details:**
   - Displays information like temperature, humidity, wind speed, and condition.
   - Shows an icon representing the weather condition.

3. **Check Search History:**
   - A list of the last five searched cities appears under "Search History."
   - Click on a city name in the history to search for it again.

4. **Error Messages:**
   - If no city is entered or an invalid city is provided, an error message will appear.

## Files Description

- **index.html**: Contains the HTML structure of the application.
- **scripts.js**: Implements the main logic, including event handling, API communication, and local storage management.
- **styles.css**: Defines the look and feel of the weather dashboard.

## Deployment

To host the frontend, you can:
- Serve it directly using a static hosting service like GitHub Pages, Netlify, or Vercel.
- Integrate it with the backend API server (e.g., using `express.static` in a Node.js server).

## Future Enhancements

- Add support for detailed weather forecasts (e.g., hourly or weekly).
- Enhance the UI with additional animations and transitions.
- Support multiple languages for weather data.
- Include geolocation-based weather fetching.

## Author
 - Rishi Krishna

---

Enjoy using the Weather Dashboard and feel free to contribute!
