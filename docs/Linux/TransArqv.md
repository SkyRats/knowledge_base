# Transferência de Arquivos

---


## 1. Introdução

Para automatizar a transferência de arquivos através de uma rede, por exemplo, 4G, faremos uso de uma rede SSH, caso não saiba como criar e configurar uma, temos a explicação aqui _LINK_ , além disso, faremos uso da biblioteca python Time, e OS(_LINK_)



## 2. Como foi feito?

Primeiro, precisa-se adquirir 4 strings, sendo elas, o ip do computador onde serão buscados os arquivos(no caso do exemplo, fotos). A primeira seria o ip, que deve possuir o formato “USUARIO@IPGLOBAL” para redes diferentes, ou “USUARIO@IPV4” para mesma rede. O segundo deve ser a senha desse usuário, e o terceiro e quarto são pastas, dados em links de arquivos, sem a última barra “~/exemplohome/exemplopasta”.

Assim, utilizando o comando system, da biblioteca os, podemos com o python enviar comandos para o terminal bash. Então, antes de tudo é necessário instalar o sshpass, da seguinte forma:

```bash
sudo apt install sshpass
```

Após isso, já podemos continuar nosso código. O primeiro comando que utilizamos é o básico “ls”, para retornar os arquivos que tem na pasta do drone, porém, utilizamos ele de uma forma em que retornamos apenas o primeiro arquivo colocado naquela pasta, dessa forma:

```bash
ls -t <pasta> | tail -1
```

E para conseguirmos mandar ele para a pasta do drone, por ssh, fazemos a conexão ao ssh, porém, ao final do comando abrimos e fechamos aspas únicas com o comando dentro, assim ele não irá conectar ao bash por ssh, e sim apenas enviar aquele comando. Isso é feito da seguinte forma:

```bash
ssh <usuario>@<ip> ‘<comando>’
```

No caso, como queremos que isso seja 100% automatizado, faremos uso da biblioteca sshpass, e assim ela irá automaticamente autenticar a todo comando, apenas com a string de senha recebida anteriormente, a sintaxe é assim:

```bash
sshpass -p <senha> ssh <usuario>@<ip> ‘<comando>’
```

Então, combinando os dois comandos, para buscarmos o primeiro arquivo colocado em uma certa pasta do computador de bordo do drone, fica:

```bash
sshpass -p <senha> ssh <usuario>@<ip> ‘ls -t <pasta> | tail -1’
```


Obs: É importante sempre remover o último caracter recebido, pois ele é um endline

Assim, colocamos o retorno desse comando em uma string, que dá o nome do arquivo que iremos pegar, o que deve ser concatenada ao endereço da pasta, desse jeito, podemos copiá-lo para a ground station, e para isso usamos o comando “scp” que copia através do ssh, e juntamente utilizamos o sshpass para autenticação automática, e tudo isso fica dessa forma:

```bash
sshpass -p <senha> scp -r <usuario><ip>:<arquivo>
```

E após termos puxado o arquivo, podemos apagá-lo de quem enviou, e assim, utilizando a mesma ideia no comando ls, faremos a mesma coisa com o comando “rm” por ssh, juntamente autenticado pelo sshpass, que fica da seguinte forma:

```bash
sshpass -p <senha> ssh <usuario>@<ip>:<arquivo> ‘rm <arquivo>’
```

Com isso, já estamos pegando os arquivos através da internet, mas, podemos automatizar mais ainda, e para isso, deixamos dentro de um “while True:”, assim, ele vai enviar todos os arquivos daquela pasta, e ainda esperar os próximos que forem colocados e enviá-los também, além disso, para evitar que arquivos sejam sobrescritos por conta de terem o mesmo nome podemos fazer um contador para cada arquivo enviado, sendo assim, cada um tendo um número, e renomeamos o arquivo após ser enviado com o comando “mv”, desse jeito:

```python
mv <path>/<arquivorecebido> <path>/<nomenovo>+<contador>
```


## 3. Código completo

Ele, e outros códigos, podem ser acessados em nosso github

Mas o código utilizado para tal, está também aqui:


```python
  print("Qual o endereço de ip do drone? (USUARIO@IP")
  ip = str(input())
  print("Qual a senha do drone?")
  senha = str(input())
  print("Qual a pasta das fotos no drone?")
  pastaDrone = str(input())
  print("Qual a pasta das fotos no seu computador?")
  pastaGs = str(input())

  numeroFoto = 0
  while True:

    ultimoArqv = os.popen("sshpass -p " + senha + " ssh " + ip + " '" + "ls -t " + pastaDrone + " | tail -1" + "'").read() #Pegar o último arquivo colocado

    print("Copiando o " + ultimoArqv)

    os.system("sshpass -p " + senha + " scp -r " + ip + ":" + pastaDrone + "/" + ultimoArqv[:-1] + " " + pastaGs) #Copiar esse arquivo
    
    os.system("sshpass -p " + senha + " ssh " + ip +" 'rm " + pastaDrone + "/" + ultimoArqv[:-1] + "'")

    numeroFoto = numeroFoto + 1

    os.system("mv " + pastaGs + "/" + ultimoArqv[:-1] + " " + pastaGs + "/" + "FOTO" + str(numeroFoto) + ".png")
```
