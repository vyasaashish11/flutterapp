 FROM nginx
 
 RUN apt-get update && apt-get upgrade -y
 
 COPY . /usr/share/nginx/html
 
 EXPOSE 8090
 
 CMD ["nginx", "-g", "daemon off;"]
