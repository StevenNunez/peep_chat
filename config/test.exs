use Mix.Config

config :peep_chat, PeepChat.Endpoint,
  http: [port: System.get_env("PORT") || 4001]
