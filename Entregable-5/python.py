# Laboratorio 5: Programación Básica en Python

# Sintaxis Básica y Operaciones Simples

# Mensaje en consola
print("¡Bienvenido al Laboratorio 5!")

# Declaración de variables
nombre = "Carlos"
edad = 20
altura = 1.75

# Operaciones
suma = edad + 5
print("Suma:", suma)
print("Hola, mi nombre es " + nombre)


# Condicionales y Bucles

# Verificar si un número es par o impar
num = int(input("Ingrese un número: "))
if num % 2 == 0:
    print("Es par.")
else:
    print("Es impar.")

# Bucle for: cuadrados
numeros = [1, 2, 3, 4, 5]
for n in numeros:
    print(f"El cuadrado de {n} es {n**2}")

# Bucle while: entrada hasta condición
clave = ""
while clave != "python":
    clave = input("Escribe la clave secreta: ")


#Listas y Diccionarios

# Lista de nombres
nombres = ["Ana", "Luis", "Pedro"]
for nombre in nombres:
    print("Estudiante:", nombre)

# Diccionario de contacto
contacto = {"nombre": "María", "correo": "maria@gmail.com"}
for clave, valor in contacto.items():
    print(f"{clave.capitalize()}: {valor}")

# Añadir a lista y actualizar diccionario
nombres.append("Juan")
contacto["telefono"] = "3210000000"


# Scripts de resolución de problemas simples

def calculadora(a, b, operacion):
    if operacion == "suma":
        return a + b
    elif operacion == "resta":
        return a - b
    elif operacion == "multiplicacion":
        return a * b
    elif operacion == "division":
        if b != 0:
            return a / b
        else:
            return "Error: División por cero"

print(calculadora(10, 2, "division"))


# Juego de adivinanza
import random

numero_secreto = random.randint(1, 10)
intento = 0
while True:
    intento = int(input("Adivina el número (1-10): "))
    if intento == numero_secreto:
        print("¡Correcto!")
        break
    elif intento < numero_secreto:
        print("Es mayor.")
    else:
        print("Es menor.")
