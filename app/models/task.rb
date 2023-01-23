class Task < ApplicationRecord
  belongs_to :user
  validates :name, :priority, presence: true
  validates :name, length: { minimum: 1 }
  validates :priority, length: { minimum: 1 }
end
