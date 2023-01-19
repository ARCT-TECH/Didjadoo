require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /index" do
    it "gets a list of users" do
      User.create(
        name: 'Register for classes',
        priority: "1",
        description: 'Fall semester courses: chemistry, biology, and calculus.',
        deadline: Date.today,
        progress: "Not started"
        )

      get "/users/index"
      user = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(user.length).to eq 1
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/users/show"
      expect(response).to have_http_status(:success)
    end
  end

end
