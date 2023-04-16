# Know a country

Try this web application at https://kcountry.herokuapp.com/

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [realization](#Realization functions)

## Prerequisites

Before you begin, make sure you have the following software installed:

- Node.js (16+)

## Installation

To install the application, follow these steps:

1. Server

```
cd serve
npm install
```

2. Client

```
cd client
npm install
```

## Usage

To start the development server, run the following command:

```
npm start
```

This will start both the front-end and back-end servers, and you can access the application at `http://localhost:3000`.

To run the application in production mode, run the following command:

```
npm run build
```

This will create a production build of the application in the `build` directory. You can then start the server with the following command:

```
npm run start:prod
```


## Realization functions

1)You can search for the country name in the search bar, and the marker of the country will be displayed on the map. Click the marker can show the specific information of the country under the right column.

2)Click a country location on the map can generate a new marker, double-click the marker can display the information of the clicked country on the right column.

3)Implemented lazy page loading

Watch the demo by click below👇
[![Watch the video](public/Screenshot 2023-04-15 at 16.51.38.png)](https://youtu.be/fMWFidphIaA)

