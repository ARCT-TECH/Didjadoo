               # ARCT-TECH

# Didjadoo

We have created a bodacious app called Didjadoo.
At its core, Didjadoo is a Task Management App.
As an adult in the 21st century, we are all plagued with the burden of having lists and goals. The purpose of this app is to assist users with their goals. This is done by having a Didjadoo list that will align with the user’s ultimate goal(s). This website is the visual representation of a user’s lists and goals in one.
This APP has a feature to include your friends, family, and colleagues in your tasks, for not only motivation but accountability. We want the users to have the capability of personalization. We are excited to give the public a viable product, that can ease every day burdens.

# README

# -SETUP-

After cloning from repository and cd into didjadoo-app, make sure to run these commands in terminal.

- $ bundle
- $ yarn
  (Returning Dev)
- $ rails db:reset
- $ rails db:migrate
  (New Dev)
- $ rails db:create
- $ rails db:seed
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

5. Created a seed for user with its parameter

- ensure to save the user (user.save!) in order to make a task

6. Created a seed for task to populate the database with the initial required data.

7. Created methods and RSPEC testing for Users and Tasks

8. Created pages and Jest Testing for Header, Footer, Navigation and AboutUs

9. Created ProtectedIndex for logged in User to create/read/update/delete Task and/or Profile along with the Jest Testing page

10. Created an unprotected show page with jest Testing page
