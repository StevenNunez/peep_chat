defmodule PeepChat.Router do
  use Phoenix.Router

  pipeline :browser do
    plug :accepts, ~w(html)
    plug :fetch_session
  end

  pipeline :api do
    plug :accepts, ~w(json)
  end

  scope "/", PeepChat do
    pipe_through :browser # Use the default browser stack

    get "/*path", HomeController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", PeepChat do
  #   pipe_through :api
  # end
end
