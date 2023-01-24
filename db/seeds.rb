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
