defmodule PeepChat.Room do
  use Ecto.Model

  schema "rooms" do
    field :name, :string
    has_many :messages, PeepChat.Message, foreign_key: :room_id
    field :created_at, :datetime, default: Ecto.DateTime.local
    field :updated_at, :datetime, default: Ecto.DateTime.local
  end
end
