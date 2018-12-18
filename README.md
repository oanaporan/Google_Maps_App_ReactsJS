### React Google Maps Final Project

Udacity's final project, a single page React App, featuring google maps, a list of locations with on map markers, a filter locations options for finding locations easier, and a third API for rendering details about the map locations. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### APIs used in this project
- Google Maps API
- Zomato API

### Download and run the project
- Download the project file
- run $ npm install
- run $ npm start
The project runs at http://localhost:3000/

## Project Specifications

### Interface Design
- All application components render on-screen in a responsive manner, and are usable across modern desktop, tablet, and phone browsers.

### Application Functionality
- Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.

### List View
- A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.
- Clicking a location on the list displays unique information about the location.

### Map and Markers
- Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.
- Clicking a marker displays unique information about a location  on the page in a separate div.

### Asynchronous API Requests
- Application utilizes the Google Maps API and Zomato API.
- All data requests are retrieved in an asynchronous manner using Fetch API.


### Offline Use
- When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

### Accessibility
- Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.
- All content-related images include appropriate alternate text that clearly describes the content of the image.