# COMO SE CONECTAR A INTERNET PELO TERMINAL DO LINUX 

Antes de tudo, é bom lembrar que você vai precisar estar conetado a algum
dispositivo que permita a conexão ao wifi (como um adaptador de wifi)

Apartir daí, você pode escrever no terminal o comando nmcli, junto com o
nome da rede wifi e sua senha

```
sudo nmcli dev wifi connect "nome da rede" password "senha"
```

caso seu computador já reconheça essa rede, ou caso ela não tenha senha, 
você pode não escrever a parte "password senha"

