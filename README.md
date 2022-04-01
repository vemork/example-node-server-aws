# example-node-server-aws

## Requisitos

Express
Mongoose
md5
Jest
Superset
Postman

## Installation en ambiente local

Descargue el repositorio y ubicado sobre el directorio del proyecto ejecute el comando `npm install`

## Installation Base de datos

Instale mongo en su ambiente y cree una base de datos llamada `mern`
Ahora cree un usuario sobre la base de datos anterios así `db.createUser({ user: "my_user", pwd: "my_pwd", roles: ["dbOwner"] })`

## Ejecución de la app

Para activar el proyecto ejecute el comando `npm start`
Una vez que observe en la consola el mensaje `Server running on port 3000 :>>` utilice postman para consumir el API

## API Endpoints

`Utilice el cliente Postman para consumir los endpoint`

Endpoint para analizar ADN `http://localhost:3000/mutant`

Payload en formato JSON para enviar en el body de la petición

```javascript
{
    "dna": [
        "CCTTAT",
        "ACCTTA",
        "TTGCGA",
        "AGTGTA",
        "CGCACA",
        "GCACTC"
    ]
}
```

Endpoint para obtener estadísticas `http://localhost:3000/stats`

## CODIGOS RECIBIDOS

`http://localhost:3000/mutant`

```javascript
## Mutante encontrado
200 - { message: "We get a Mutant! Call Magneto ..." };

## Humano encontrado
403 - { message: "It's another human ..." };

## Adn repetido y procesado
400 - { message: "This ADN chain have been analized yet." };
```

`http://localhost:3000/stats`

```javascript

## Estadísticas no xistentes
200 - { message: "No ADN chain processed yet." };

## Estadísticas existentes
200 - {
          "count_mutant_dna": 1,
          "count_human_dna": 0,
          "ratio": 0
      }
```

# Test en ambiente local
Para el desarrollo de los test estando sobre el directorio del proyecto y bajo el sistema operativo windows 
ejecutar el comando ```npm run test```

# Despliegue en AWS

## Ejecución del programa
Para ejecutar el programa se creó una instancia (más dos réplicas) en AWS cada una de ellas cuenta con reglas
de acceso de tráfico por medio de los puertos `:3000 para el app`, `:27017 para mongo`, `:443 para ssh` y `:80 para HTTP`

Adicional se crean un balanceador de cargas que incluye las tres instancias anteriores usando los mismos puertos de
referencias para la ejecución del API

# Direcciones Instancias
52.90.194.113
35.171.16.3
44.203.135.194
# API Endpoints en AWS

`Utilice el cliente Postman para consumir los endpoint`

Endpoint para analizar ADN `http://{IP instancia}:3000/mutant`
Endpoint para analizar ADN `http://{IP instancia}:3000/stats`

remplace {IP instancia} por la Ip donde desee realizar las peticiones

```
En caso de que no se pueda establecer la comunicaión al API en AWS será necesario reiniciar las intancias
y servicios desde la consola de AWS. Para solicitar este proceso por favor contactar al Admin.
```

# Test en AWS
Para ejecutar los test al ser un abiente UNIX se debe tener acceso a la consola y 
ejecutar el siguiente comando ```NODE_OPTIONS=--experimental-vm-modules npx jest``` en caso de ser necesario
solicite al Admin el espacio para realizar la operación.