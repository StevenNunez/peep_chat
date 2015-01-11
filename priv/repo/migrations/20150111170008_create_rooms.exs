defmodule PeepChat.Repo.Migrations.CreateRooms do
  use Ecto.Migration

  def up do
    """
      CREATE TABLE rooms(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        created_at TIMESTAMP,
        updated_at TIMESTAMP
      )
    """
  end

  def down do
    "DROP TABLE rooms"
  end
end
