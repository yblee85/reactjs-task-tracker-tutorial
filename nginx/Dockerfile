# this works for the front end not having to talk with server
# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
#WORKDIR /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
