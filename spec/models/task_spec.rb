require 'rails_helper'

RSpec.describe Task, type: :model do
  it "should validate task has a name" do
    task = Task.create
    expect(task.errors[:name]).to_not be_empty
  end
  it "should validate task has a priority" do
    task = Task.create
    expect(task.errors[:priority]).to_not be_empty
  end
end
