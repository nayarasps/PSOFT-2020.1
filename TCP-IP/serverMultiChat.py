# @author Nayara Souza - 118110390 - UFCG
# coding:utf-8

import socket
import sys
from threading import Thread

host = 'localhost'
port = 9090
users = []

def new_user(usersocket, adress):
    while True:
        mensagem = usersocket.recv(1024).decode('utf-8')
        
        msg = '[%s:%s] -> %s' % (adress[0], adress[1], mensagem.strip())
        bye = 'User %s:%s desconectado' % adress

        if (mensagem.rstrip() == 'BYE'):   
            print(bye)
            for user in users:
                if user != usersocket:
                    user.send(bye.encode('utf-8'))
            users.remove(usersocket)
            break
       
        print(msg)
        for user in users:
            if user != usersocket:
                user.send(msg.encode('utf-8'))

    usersocket.close()

s = socket.socket()
s.bind((host, port))
s.listen()

print('Aguardando conexão na porta %s...' % port)

while True:
    connection, adress = s.accept()
    users.append(connection)

    print('User %s:%s se conectou' % adress)
    Thread(target=new_user, args=(connection, adress)).start()
s.close()