
## Project Description
This project is a simple Rails REST API that fetches events and users.

The API allows users to mevents. The application has five models:Attendee ,event, speaker,sponsor,user each representing information and relations between ech other.


The application provides several RESTful routes that allow users to view, create, update, and delete heroes and powers.

## Features
Users can view a list of all events
GET /events

Users can view a list of all sponsors.
GET /sponsors

Users can view a list of all speakers.
GET /speakers

Users can view details of a specific event
GET /event/:id


Users can create a new event.
POST /event

Users can update an event.
PATCH /event

## Technology Used
Ruby on Rails

## Setup Instructions
To run this application on your local machine, you need to have Ruby on Rails . Follow these steps:

Open your terminal.
Clone the repository
Bundle install
Run rails server using the command: rails s
Use Postman to access the endpoints.



