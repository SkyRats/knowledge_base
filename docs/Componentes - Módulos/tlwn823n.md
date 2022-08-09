# Como instalar o driver para o TL-WN 823N no Ubuntu Mate
Siga os comandos abaixo :)


```bash
sudo apt-get install git linux-headers-generic build-essential dkms
```

```bash
git clone https://github.com/Mange/rtl8192eu-linux-driver
cd rtl8192eu-linux-driver
```

```bash
sudo dkms add .
```

```bash
sudo dkms install rtl8192eu/1.0
```

```bash
echo "blacklist rtl8xxxu" | sudo tee /etc/modprobe.d/rtl8xxxu.conf
```

```bash
echo -e "8192eu\n\nloop" | sudo tee /etc/modules
```

```bash
echo "options 8192eu rtw_power_mgnt=0 rtw_enusbss=0" | sudo tee /etc/modprobe.d/8192eu.conf
```

```bash
sudo update-grub; sudo update-initramfs -u
```

Agora reinicie seu computador!

E quando ligar, teste para ver se o driver está funcionando com o seguinte comando:

```bash
sudo lshw -c network
```

[Referência](https://askubuntu.com/questions/1211157/how-do-i-get-a-tp-link-tl-wn823n-v3-wireless-adapter-working)