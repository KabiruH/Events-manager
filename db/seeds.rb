# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first
puts "seeding"

5.times do
  # create a movie with random data
  User.create(
    username: Faker::Internet.username(specifier: 5..10),
    password_digest: Faker::Internet.password(min_length: 8),
    email: Faker::Internet.email,
    gender: Faker::Gender.type,
    age: Faker::Number.within(range: 13..70)
  )
end

Event.create(
  title: "Music Festival",
  image: "https://example.com/image.jpg",
  description: "Join us for a day of music, food, and fun!",
  location: "Central Park, New York City",
  age_limit: "18+",
  capacity: 5000,
  date: DateTime.new(2023, 5, 20),
  time: DateTime.new(2023, 5, 20, 12, 0, 0)
)
Event.create(
  title: "Charity Walk",
  image: "https://example.com/image.jpg",
  description: "Join us for a charity walk to raise funds for cancer research.",
  location: "Golden Gate Park, San Francisco",
  age_limit: "All ages",
  capacity: 1000,
  date: DateTime.new(2023, 6, 10),
  time: DateTime.new(2023, 6, 10, 9, 0, 0)
)
Event.create(
  title: "Tech Conference",
  image: "https://example.com/image.jpg",
  description: "Join us for a conference on the latest trends in technology.",
  location: "Moscone Center, San Francisco",
  age_limit: "18+",
  capacity: 500,
  date: DateTime.new(2023, 7, 15),
  time: DateTime.new(2023, 7, 15, 10, 0, 0)
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
    event_id: "EVT001",
    organisation: "ABC Company",
    job_title: "CEO"
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    event_id: "EVT002",
    organisation: "XYZ Corporation",
    job_title: "VP of Marketing"
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    event_id: "EVT003",
    organisation: "123 Enterprises",
    job_title: "CTO"
  }
])
 Attendee.create([
  {
    name: "Samantha Lee",
    email: "samanthalee@example.com",
    user_id: 1,
    event_id: "EVT001"
  },
  {
    name: "David Kim",
    email: "davidkim@example.com",
    user_id: 2,
    event_id: "EVT002"
  },
  {
    name: "Jennifer Chen",
    email: "jenniferchen@example.com",
    user_id: 3,
    event_id: "EVT003"
  }
 ])
 
 puts "done seeding"