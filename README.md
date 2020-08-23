# node-api

```
yarn start
```

Modo debug

```
DEBUG=* node index.js
DEBUG=app node index.js
yarn debug
```


La estructua del proyecto podría ser la siguiente:
Components -> entidad ->
* Controller
* Model
* network
* store


> docker build -t api .
> docker run -d api

now secret add nombre valor
now alias app_now_url name_alias


Autenticación tradicional vs JWT
Cuando usamos una autenticación tradicional se crea una sesión y el ID de esa sesión se almacena en una cookie del navegador, pero cuando utilizamos JWT firmamos un token y este se guarda en el navegador el cual permite a una SPA actualizarse sin refrescar la ventana.

Firmando y Verificando nuestro JWT
Para firmar nuestro token utilizaremos un paquete de node llamado jsonwebtoken y al usarlo en nuestro código se verá de esta manera:

jwt.sign({ sub: user.id }, 'secret', options);
El primer atributo que recibe es el payload o sea los datos que guardaremos en ese token. De segundo atributo recibe una clave secreta con la cual será firmado y finalmente podremos pasarle opciones si es nuestro caso.

Para verificar nuestro token lo haremos de la siguiente manera:

jwt.verify(token, 'secret', function(err, decoded){});
Como primer atributo recibiremos el token, de segundo atributo el secreto de la firma y como tercer argumento (opcional) recibiremos el token decodificado.

Vamos a inicializar nuestro proyecto con npm init -y
Crearemos el archivo index.js
Vamos a instalar los paquetes necesarios con npm i jsonwebtoken
En el index.js vamos a hacer toda la lógica de nuestra aplicación


> npm i -g pm2

> pm2 logs

> pm2 status

> pm2 start

> pm2 start index.js

> pm2 start src/mysql/index.js

> pm2 start src/post/index.js

> pm2 stop id


> npm i -g now
> now
> now dev

https://redislabs.com/

# Modificar nginx

> sudo apt-get install nginx
> sudo service nginx start
> sudo service nginx stop
> sudo nano /etc/nginx/site-availables/default

location /api/user {
    proxy_pass http://localhost:3000

}
location /api/auth {
    proxy_pass http://localhost:3000
    
}
location /api/post {
    proxy_pass http://localhost:3001
    
}