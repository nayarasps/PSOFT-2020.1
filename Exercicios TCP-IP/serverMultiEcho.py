# @author Nayara Souza - 118110390 - UFCG
# coding:utf-8

import socket
import sys
import _thread

host = 'localhost'
port = 9090

def new_user(usersocket, adress):
    while True:
        mensagem = usersocket.recv(1024).decode('utf-8')
        if (mensagem == 'FIM\n'):
            print('User %s:%s desconectado' % adress)
            break
        print('[%s:%s] -> %s' % (adress[0], adress[1], mensagem.strip()))
        
        result = '> Mensagem Enviada\n'
        usersocket.sendall(result.encode('utf-8'))
    usersocket.close()

s = socket.socket()
s.bind((host, port))
s.listen()

while True:
    print('Aguardando conexão na porta %s...' % port)
    connection, adress = s.accept()

    print('User %s:%s' % adress)
    _thread.start_new_thread(new_user, (connection, adress))
s.close()