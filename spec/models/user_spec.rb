
require "rails_helper"

RSpec.describe User, type: :model do
    it "should validate user submitted a name" do
      user = User.create
      expect(user.errors[:name]).to_not be_empty
    end
    end