defmodule PeepChat.HomeController do
  use Phoenix.Controller
  plug :action

  def index(conn, _params) do
    {:ok, home_page} = File.read 'priv/static/index.html'
    html conn, home_page
  end
end
