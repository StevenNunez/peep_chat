defmodule PeepChat.Repo do
  use Ecto.Repo, adapter: Ecto.Adapters.Postgres

  def conf do
    parse_url "ecto://StevenNunez@localhost/peep_chat_dev"
  end

  def priv do
    app_dir(:peep_chat, "priv/repo")
  end
end
