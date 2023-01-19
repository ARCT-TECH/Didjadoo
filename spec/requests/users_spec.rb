require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /index" do
    it "gets a list of users" do
      User.create(
        name: 'Tony Mont',
        email: "Do@gooderlearner.com",
        password: 'ASDFasdf'
        )

      get "/users"
      user = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(user.length).to eq 1
    end
  end

  describe 'PATCH /update' do
    it 'can update a user' do  

      user = User.create(email: 'tabi@example.com', password: 'password', name:'Tabi')

        user_params = {
          user:{
            name: 'Tony Mont',
            bio: "Do gooder",
            profilepic: 'KPOP'
          }
        }
        
        patch "/users/#{user.id}", params: user_params
        expect(response).to have_http_status(200)
        user = User.last
        expect(user.name).to eq('Tony Mont')
        end

    it 'cant update a user without a name' do  

        user = User.create(email: 'tabi@example.com', password: 'password', name:'Tabi')
    
          user_params = {
              user:{
                name: 'Tony Mont',
                bio: "Do gooder",
                profilepic: 'KPOP'
              }
            }
            
        patch "/users/#{user.id}", params: user_params
        expect(response).to have_http_status(200)
        user = User.last
        expect(user.profilepic).to eq('KPOP')
        expect(user.name).to eq('Tony Mont')
        end
            
    it 'cant update a user without a name' do  

        user = User.create(email: 'tabi@example.com', password: 'password', name:'Tabi')
        
            user_params = {
                  user:{
                    name: nil,
                    bio: "Do gooder",
                    profilepic: 'KPOP'
               }
              }
                
          user = User.last
          patch "/users/#{user.id}", params: user_params
          # updated_coffee = Coffee.find(coffee.id)
          expect(response).to have_http_status(422)
          json_response = JSON.parse(response.body)
          expect(json_response['name']).to include("can't be blank")
    end
    end
   end

