target = EP
CC = g++
CFLAGS = -Wall -g
SRC = src/
include = include/


main: main.o Bateria.o Drone.o S1000.o droneSwarm.o
	$(CC) $(CFLAGS) -o main main.o Bateria.o Drone.o S1000.o droneSwarm.o
	rm -rf *.o

Bateria.o: Bateria.o
	$(CC) $(CFLAGS) -c Bateria.cpp

Drone.o: Bateria.o Drone.o
	$(CC) $(CFLAGS) -c Drone.cpp

S1000.o: Bateria.o Drone.o S1000.o
	$(CC) $(CFLAGS) -c S1000.cpp

droneSwarm.o: Bateria.o Drone.o droneSwarm.o
	$(CC) $(CFLAGS) -c droneSwarm.cpp

main.o: main.o Bateria.o Drone.o S1000.o droneSwarm.o
	$(CC) $(CFLAGS) -c main.cpp

clean:
	rm -rf *.o

