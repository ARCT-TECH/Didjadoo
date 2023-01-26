# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.new
user.name = 'Ciani'
user.email = 'tabi@example.com'
user.password = 'password'
user.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user.save!

user2 = User.new
user2.name = 'Ciani'
user2.email = 'tab@example.com'
user2.password = 'password'
user2.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user2.save!

user3 = User.new
user3.name = 'Ciani'
user3.email = 'tai@example.com'
user3.password = 'password'
user3.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user3.save!

user4 = User.new
user4.name = 'Ciani'
user4.email = 'abi@example.com'
user4.password = 'password'
user4.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user4.save!

user5 = User.new
user5.name = 'Ciani'
user5.email = 'ramirez@example.com'
user5.password = 'password'
user5.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user5.save!

user6 = User.new
user6.name = 'Ciani'
user6.email = 'amirez@example.com'
user6.password = 'password'
user6.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user6.save!

user7 = User.new
user7.name = 'Ciani'
user7.email = 'mirez@example.com'
user7.password = 'password'
user7.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user7.save!

user8 = User.new
user8.name = 'Ciani'
user8.email = 'ciani@example.com'
user8.password = 'password'
user8.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user8.save!

user9 = User.new
user9.name = 'Ciani'
user9.email = 'iani@example.com'
user9.password = 'password'
user9.profilepic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9LxFYtI9UXRMyMyn119IVYXg_AnRrdwMig&usqp=CAU'
user9.save!


task_seeds = [
  { 
    name: 'Register for classes',
    priority: "1",
    description: 'Fall semester courses: chemistry, biology, and calculus.',
    deadline: Date.today,
    progress: "Not started"
  },
  { 
    name: 'Meet with study group',
    priority: "2",
    description: 'Discuss chapter 4 of the textbook',
    deadline: Date.today,
    progress: "Not started"
  },
  { name: 'Prepare for presentation',
    priority: "3",
    description: 'Create slides and practice delivery',
    deadline: Date.today,
    progress: "Not started"
  },
  { name: 'Grocery shopping',
    priority: "2",
    description: 'Buy ingredients for dinner tonight',
    deadline: Date.today,
    progress: "Not started"
  },
  { name: 'Update resume',
    priority: "3",
    description: 'Add new experiences and skills',
    deadline: Date.today,
    progress: "Not started"
  }
]

task_seeds.each do |task|
  user.tasks.create(task)
  p "creating: #{task}"
end
