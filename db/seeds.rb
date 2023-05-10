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
  image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg",
  description: "Join us for a day of music, food, and fun!",
  location: "Central Park, New York City",
  age_limit: "18+",
  capacity: 5000,
  date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
  user_id: 1
)
Event.create(  
title: "Autism foundation",
image: "https://w0.peakpx.com/wallpaper/608/924/HD-wallpaper-autism-speaks-awareness-purple-april-puzzle-asd-autism.jpg",
description: "We take a look at how we have come in our knowledge and understanding of Autism",
location: "Central Park, New York City",
age_limit: "All ages",
capacity: 5000,
date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
user_id: 1
)
Event.create(
  title: "Charity Walk",
  image: "https://media.istockphoto.com/id/1139537240/photo/african-american-woman-with-group-in-breast-cancer-rally.jpg?s=612x612&w=0&k=20&c=uatzM_wQ0Fge1g71WtiLzjPFpdVFRS8rYjLM6ke-VH8=",
  description: "Join us for a charity walk to raise funds for cancer research.",
  location: "Golden Gate Park, San Francisco",
  age_limit: "All ages",
  capacity: 1000,
  date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
  user_id: 1
)
Event.create(
  title: "Fast Festival",
  image: "data:image/jpeg;base64,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",
  description: "Join the fast family as the new trailer for their new movie Fast X drops.",
  location: "Golden Gate Park, San Francisco",
  age_limit: "All ages",
  capacity: 1000,
  date: Faker::Time.forward(days: 5,  period: :evening, format: :long),
  user_id: 1
)
Event.create(
  title: "Tech Conference",
  image: "https://www.tycoonstory.com/wp-content/uploads/2022/09/8-Technology-Trends-That-Will-Change-The-Way-You-Do-Business-Tycoonstory-1.jpg",
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