 FROM nginx
 
 RUN apt-get update && apt-get upgrade -y
 
 COPY . /usr/share/nginx/html
 
 EXPOSE 9090 
 
 CMD ["nginx", "-g", "daemon off;"]
