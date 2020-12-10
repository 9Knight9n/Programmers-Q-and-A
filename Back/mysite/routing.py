from channels.routing import ProtocolTypeRouter, URLRouter
from generalchatroom.routing import websockets
application = ProtocolTypeRouter({
    "websocket": websockets,
})