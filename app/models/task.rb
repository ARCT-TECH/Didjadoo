class Task < ApplicationRecord
  belongs_to :user
  validates :name, :priority, presence: true
end
