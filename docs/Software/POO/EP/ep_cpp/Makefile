target = EP
CC = g++
CFLAGS = -Wall -g

main: main.o Bateria.o Drone.o S1000.o
	$(CC) $(CFLAGS) -o main.exe main.o Bateria.o Drone.o S1000.o
	rm -rf *.o

Bateria: Bateria.o
	$(CC) $(CFLAGS) -c Bateria.cpp

Drone: Bateria.o Drone.o
	$(CC) $(CFLAGS) -c Drone.cpp

S1000: Bateria.o Drone.o S1000.o
	$(CC) $(CFLAGS) -c S1000.cpp

clean:
	rm -rf *.o

