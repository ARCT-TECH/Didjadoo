# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user = User.new
user.name = 'Renita'
user.email = 'r@example.com'
user.password = 'rpassword'
user.profilepic = 'https://www.renitagidlund.com/-_-/res/2304e9c6-838d-4573-9e32-769ffc5b4e42/images/files/2304e9c6-838d-4573-9e32-769ffc5b4e42/2a09be3e-a7a1-482b-85f4-6acb370ba12f/320-320/7781dff7836659cc312e50b76d999a75dd78d7c4'
user.save!

user2 = User.new
user2.name = 'Anthony'
user2.email = 'a@example.com'
user2.password = 'apassword'
user2.profilepic = 'https://avatars.githubusercontent.com/u/111712184?s=400&u=1d5dedbbaa52cfbd69091cbbb02e84080298ae7e&v=4'
user2.save!

user3 = User.new
user3.name = 'Ciani'
user3.email = 'c@example.com'
user3.password = 'cpassword'
user3.profilepic = 'https://media.licdn.com/dms/image/C4E03AQHnz08jZ57Phg/profile-displayphoto-shrink_400_400/0/1639260274722?e=1680134400&v=beta&t=EN_T_viY-f5xPJjlihXctl5ABcEuOzYWZx6lfIEAHFc'
user3.save!

user4 = User.new
user4.name = 'Tabi'
user4.email = 't@example.com'
user4.password = 'tpassword'
user4.profilepic = 'https://media.licdn.com/dms/image/D4D03AQElDd5Hjt4NIw/profile-displayphoto-shrink_400_400/0/1669926382452?e=1680134400&v=beta&t=fTkJv7KuesVoyHsWNG7Ef_KfZq8VaWBmWUq6P9kP6yY'
user4.save!

user5 = User.new
user5.name = 'Bob'
user5.email = 'b@example.com'
user5.password = 'bpassword'
user5.profilepic = 'https://images.pexels.com/photos/3799790/pexels-photo-3799790.jpeg'
user5.save!

user6 = User.new
user6.name = 'Dan'
user6.email = 'd@example.com'
user6.password = 'dpassword'
user6.profilepic = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
user6.save!

user7 = User.new
user7.name = 'Emma'
user7.email = 'e@example.com'
user7.password = 'epassword'
user7.profilepic = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
user7.save!

user8 = User.new
user8.name = 'Fred'
user8.email = 'f@example.com'
user8.password = 'fpassword'
user8.profilepic = 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
user8.save!

user9 = User.new
user9.name = 'Gail'
user9.email = 'g@example.com'
user9.password = 'gpassword'
user9.profilepic = 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
user9.save!


task_seeds = [
  { 
    name: 'Register for classes',
    priority: "1",
    description: 'Fall semester courses: chemistry, biology, and calculus.',
    deadline: Date.today,
    progress: "Not started",
    private: "false",
    likes: ["Bluey", "Bingo"]
  },
  { 
    name: 'Meet with study group',
    priority: "2",
    description: 'Discuss chapter 4 of the textbook',
    deadline: Date.today,
    progress: "Not started",
    private: "false",
    likes: ["Bluey", "Bingo"]
  },
  { name: 'Prepare for presentation',
    priority: "3",
    description: 'Create slides and practice delivery',
    deadline: Date.today,
    progress: "Not started",
    private: "false",
    likes: ["Bluey"]
  },
  { name: 'Grocery shopping',
    priority: "2",
    description: 'Buy ingredients for dinner tonight',
    deadline: Date.today,
    progress: "Not started",
    private: "false",
    likes: ["Bluey", "Bingo", "Chili"]
  },
  { name: 'Update resume',
    priority: "3",
    description: 'Add new experiences and skills',
    deadline: Date.today,
    progress: "Not started",
    private: "true",
    likes: []
  }
]

task_seeds.each do |task|
  user.tasks.create(task)
  p "creating: #{task}"
end
