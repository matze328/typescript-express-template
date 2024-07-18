# Image definieren
FROM NODE:latest

ENV NAME="Marcel"
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD [ "sh", "-c", "node", "server.ts", "echo Hallo $NAME!"]

EXPOSE 5050


# Befehl zum erstellen des images
# docker build -t <name-des-images> <Pfad zum Verzeichnes, in dem die Dockerfile liegt>  
# Bsp: docker build -t my-express-app .
# Starten des docker 
# docker run -p <Port auf Computer>:<Port der App in Docker> <name-des-images>
# Bsp: docker run -p 3000:5050 my-express-app