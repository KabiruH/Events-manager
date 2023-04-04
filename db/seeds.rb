# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first
puts "seeding"

20.times do
  # create a user with random data
  User.create(
    username: Faker::Internet.username(specifier: 5..10),
    password: "password",
    email: Faker::Internet.email,
    gender: Faker::Gender.type,
    age: Faker::Number.within(range: 13..70)
  )
end

Event.create(
  title: "Music Festival",
  image: "https://www.shutterstock.com/image-photo/stage-concert-light-people-watching-rock-673008964",
  description: "Join us for a day of music, food, and fun!",
  location: "Central Park, New York City",
  age_limit: "18+",
  capacity: 5000,
  date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
  user_id: 1
)
Event.create(  
title: "Autism foundation",
image: "https://www.shutterstock.com/image-vector/world-autism-awareness-day-holiday-event-598462586",
description: "We take a look at how we have come in our knowledge and understanding of Autism",
location: "Central Park, New York City",
age_limit: "18+",
capacity: 5000,
date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
user_id: 1
)
Event.create(
  title: "Charity Walk",
  image: "https://www.shutterstock.com/image-photo/friend-runners-taking-selfie-charity-run-2109966056",
  description: "Join us for a charity walk to raise funds for cancer research.",
  location: "Golden Gate Park, San Francisco",
  age_limit: "All ages",
  capacity: 1000,
  date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
  user_id: 1
)
Event.create(
  title: "Fast Festival",
  image: "https://www.shutterstock.com/image-photo/las-vegas-nvusa-november-2-2018-1241742250",
  description: "Join the fast family as the new trailer for their new movie Fast X drops.",
  location: "Golden Gate Park, San Francisco",
  age_limit: "All ages",
  capacity: 1000,
  date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
  user_id: 1
)
Event.create(
  title: "Tech Conference",
  image: "https://www.shutterstock.com/image-photo/speaker-giving-talk-on-corporate-business-481869205",
  description: "Join us for a conference on the latest trends in technology.",
  location: "Moscone Center, San Francisco",
  age_limit: "18+",
  capacity: 500,
  date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
  user_id: 1
)
 Sponsor.create(
  title: "Google",
  organisation: "Google Inc.",
  category: "Technology",
  industry: "Software"
)
Sponsor.create(
  title: "Nike",
  organisation: "Nike Inc.",
  category: "Fashion",
  industry: "Sportswear"
)
Sponsor.create(
  title: "Coca-Cola",
  organisation: "The Coca-Cola Company",
  category: "Food and Beverage",
  industry: "Beverages"
)

Speaker.create([
  {
    name: "John Doe",
    email: "johndoe@example.com",
    event_id: 2,
    organisation: "ABC Company",
    job_title: "CEO"
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    event_id: 1,
    organisation: "XYZ Corporation",
    job_title: "VP of Marketing"
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    event_id: 2,
    organisation: "123 Enterprises",
    job_title: "CTO"
  }
])
 Attendee.create([
  {
    name: "Samantha Lee",
    email: "samanthalee@example.com",
    user_id: 1,
    event_id: 3
  },
  {
    name: "David Kim",
    email: "davidkim@example.com",
    user_id: 2,
    event_id: 1
  },
  {
    name: "Jennifer Chen",
    email: "jenniferchen@example.com",
    user_id: 3,
    event_id: 3
  }
 ])
 
 puts "done seeding"