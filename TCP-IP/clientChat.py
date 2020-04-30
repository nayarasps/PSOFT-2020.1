# @author Nayara Souza - 118110390 - UFCG
# coding:utf-8

import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = 'localhost'
port = 9090

server.connect((host,port))
print('Conectado ao Servidor')

while True:
    send_msg = input()
    server.send(send_msg.encode('utf-8'))

    rec_msg = server.recv(1024)
    print(rec_msg.decode('utf-8'))

    

