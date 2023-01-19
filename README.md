# ARCT-TECH

# README

# -SETUP-

After cloning from repository and cd into didjadoo-app, make sure to run these commands in terminal.

- $ bundle
- $ yarn
- $ rails db:create
- $ rails db:migrate

---

# What we did

1. In order to create the user schema

- $ rails g devise:views

2. In order to create the controller file for the user

- $ rails g controller Users index show

3. created a new file app>controllers>

- registration_controller.rb
  In private we added the method for when a user is signing up and for when a user wants to update their information

4. Created RSPEC testing and Validations for User and Tasks
