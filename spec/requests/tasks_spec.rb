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

describe 'POST /create' do
  it "create a task" do
    User.create(name: "Renita", email: "hello@world.com", password: "1234hi")
    user = User.first
    task_params = {

        name: 'Yoga',
        priority: 'high',
        description: 'warrior one',
        progress: 'not started',
        deadline: Date.today,
        private: true,
        user_id: user.id
      }
      
      post '/tasks', params: {task: task_params}
      expect(response).to have_http_status(200)
      task = Task.last
      expect(task.name).to eq "Yoga"
    end
  

  it "doesn't create a task without a name and priority" do
    User.create(name: "Renita", email: "hello@world.com", password: "1234hi")
    user = User.first
      task_params = {
        user_id: user.id
      }
    post '/tasks', params: {task: task_params}
    expect(response.status).to eq(422)
    json = JSON.parse(response.body)
    expect(json['name']).to include "can't be blank"
  end
end

describe 'PATCHES /update' do
  it "updates a task" do
    User.create(name: "Renita", email: "hello@world.com", password: "1234hi")
    user = User.first
    user.tasks.create(
      name: 'Yoga',
      priority: 'high',
      user_id: user.id
    )
    task_params = {
        name: 'Pilates',
        priority: 'medium',
        description: 'work on abs',
        progress: 'not started',
        deadline: Date.today,
        private: true,
        user_id: user.id
      }
      task = Task.last
      patch "/tasks/#{task.id}", params: {task: task_params}
      expect(response).to have_http_status(200)
      updated_task = Task.find(task.id)
      expect(updated_task.name).to eq "Pilates"
    end
  

  it "doesn't update a task without a name and priority" do
    User.create(name: "Renita", email: "hello@world.com", password: "1234hi")
    user = User.first
    user.tasks.create(
      name: 'Yoga',
      priority: 'high',
      user_id: user.id
    )
      task_params = {
        name: nil,
        priority: nil,
        user_id: user.id
      }
    task = Task.last
    patch "/tasks/#{task.id}", params: {task: task_params}
    expect(response.status).to eq(422)
    json = JSON.parse(response.body)
    expect(json['name']).to include "can't be blank"
    expect(json['priority']).to include "can't be blank"
  end
end

describe 'DELETE /destroy' do
  it 'can delete a task' do
    User.create(name: "Renita", email: "hello@world.com", password: "1234hi")
    user = User.first
    user.tasks.create(
      name: 'Yoga',
      priority: 'high',
      user_id: user.id
    )

    task = Task.last
    delete "/tasks/#{task.id}"
    expect(response).to have_http_status(200)
    expect(Task.all).to be_empty
  end
end