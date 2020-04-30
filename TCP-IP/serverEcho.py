# @author Nayara Souza - 118110390 - UFCG
# coding:utf-8

import socket
import sys

host = 'localhost'
port = 9090

with socket.socket() as s:
    s.bind((host, port))
    s.listen(1)

    while True:
        print('Aguardando conexão na porta %s...' % port)
        connection, adress = s.accept()

        try:
            print('Conexão estabelecida de %s:%s' % adress)

            while True:
                mensagem = connection.recv(1024).decode('utf-8')
            
                if (mensagem == 'FIM\n'): break
            
                print('[%s:%s] ' % (adress[0], adress[1], mensagem.strip()))
            
                result = '> Mensagem Enviada\n'
                connection.sendall(result.encode('utf-8'))
        
        finally:
            print('Encerrando conexão atual')
            connection.close()
    s.close()
    




