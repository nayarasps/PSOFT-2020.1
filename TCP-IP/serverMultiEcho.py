# @author Nayara Souza - 118110390 - UFCG
# coding:utf-8

import socket
import sys
from threading import Thread

host = 'localhost'
port = 9090

def new_user(usersocket, adress):
    while True:
        mensagem = usersocket.recv(1024).decode('utf-8')
        if (mensagem.rstrip() == 'FIM'):
            print('User %s:%s desconectado' % adress)
            break
        print('[%s:%s] -> %s' % (adress[0], adress[1], mensagem.strip()))
        
        result = '> Mensagem Enviada'
        usersocket.sendall(result.encode('utf-8'))
    usersocket.close()

s = socket.socket()
s.bind((host, port))
s.listen()

print('Aguardando conexão na porta %s...' % port)

while True:
    connection, adress = s.accept()

    print('User %s:%s' % adress)
    Thread(target=new_user, args=(connection, adress)).start()
s.close()