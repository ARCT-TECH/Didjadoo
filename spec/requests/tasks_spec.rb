require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  describe "GET /index" do
    it "gets a list of tasks" do
      user = User.create(name: "Renita", email: "hello@world.com", password: "1234hi")
      user.tasks.create(
        name: 'Yoga',
        priority: 'high'
      )
      get '/tasks'

      task = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(task.length).to eq 1 
    end
  end
end
