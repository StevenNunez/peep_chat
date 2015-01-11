defmodule PeepChat.RoomController do
  use Phoenix.Controller
  plug :action

  def index(conn, _params) do
    rooms = PeepChat.Repo.all from r in PeepChat.Room, preload: [:messages]
    # rooms = PeepChat.Room |>
    #         PeepChat.Repo.all preload: [:messages]
    json conn, %{rooms: rooms, messages: Enum.first(rooms).messages}
  end
end
