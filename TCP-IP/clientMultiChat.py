# @author Nayara Souza - 118110390 - UFCG
# coding:utf-8

import socket
import sys
import select

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = 'localhost'
port = 9091

server.connect((host,port))
print('Conectado ao Servidor')

while True:
    recv_msg = server.recv(1024).decode('utf-8')
    print(recv_msg)
    send_msg = sys.stdin.read()
    server.send(send_msg.encode('utf-8'))
    print('A mensagem foi enviada...')
server.close()
    

