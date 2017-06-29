require 'rack'

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  # Level 1
  # res['Content-Type'] = 'text/html'
  # res.write("Hello world!")
  # res.finish
  # Level 2
  res['Content-Type'] = 'text/text'
  res.write(req.path)
  res.finish
end

Rack::Server.start(
  app: app,
  Port: 3000
)
