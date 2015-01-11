defmodule PeepChat.Message do
  use Ecto.Model

  schema "messages" do
    field :body, :string
    belongs_to :room, PeepChat.Room
    field :created_at, :datetime, default: Ecto.DateTime.local
    field :updated_at, :datetime, default: Ecto.DateTime.local
  end
end
