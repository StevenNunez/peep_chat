use Mix.Config

# ## SSL Support
#
# To get SSL working, you will need to set:
#
#     https: [port: 443,
#             keyfile: System.get_env("SOME_APP_SSL_KEY_PATH"),
#             certfile: System.get_env("SOME_APP_SSL_CERT_PATH")]
#
# Where those two env variables point to a file on
# disk for the key and cert.

config :peep_chat, PeepChat.Endpoint,
  url: [host: "example.com"],
  http: [port: System.get_env("PORT")],
  secret_key_base: "lpvsCEaKJ5wx/E7lmxf7hZC4mzYuMRwIiRDK5/G1/Qq/Yjdp+zdJNToFk3fCm1dy"

config :logger,
  level: :info
