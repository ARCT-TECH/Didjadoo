class TasksController < ApplicationController
    def index
        tasks = Task.all 
        render json: tasks
    end

    def create
        task = Task.create(task_params)
        if task.valid?
        render json: task
        else render json: task.errors, status: :unprocessable_entity
        end
    end

    private
    def task_params
      params.require(:task).permit(:name, :description, :priority, :progress, :private, :deadline, :user_id)
    end
end
