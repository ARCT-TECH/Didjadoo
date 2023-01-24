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
  it 'is not valid if name is less than 1 characters' do
    task = Task.create
    expect(task.errors[:name]).to_not be_empty
  end
  it 'is not valid if priority is less than 1 characters' do
    Task.create(name: 'Washing dishes', priority: 2, description: '(202) 123-4567', deadline: 'Doctor and FBI agent.')
  dishes = Task.create(name: '', priority: '', description: '(202) 123-4567', deadline: 'Doctor and FBI agent.')
    task = Task.create
    expect(task.errors[:name]).to_not be_empty
  end
  
end
