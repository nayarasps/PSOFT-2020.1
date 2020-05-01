# @author Nayara Souza - 118110390 - UFCG
# coding:utf-8

# Client para o serverMultiChat

import socket
from threading import Thread

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = 'localhost'
port = 9090

server.connect((host,port))
print('Conectado ao Servidor')

def receive():
    while True:
        recv_msg = server.recv(1024)
        if not recv_msg: break
        print(recv_msg.decode('utf-8'))

while True:
    Thread(target=receive).start()
    send_msg = input()
    server.send(send_msg.encode('utf-8'))

server.close()

    

