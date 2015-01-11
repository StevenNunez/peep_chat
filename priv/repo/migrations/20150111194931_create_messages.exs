defmodule PeepChat.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def up do
    """
    CREATE TABLE messages(
    id SERIAL PRIMARY KEY,
    body VARCHAR(255),
    room_id integer REFERENCES rooms (id),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
    )
    """
  end

  def down do
    "DROP TABLE messages"
  end
end
