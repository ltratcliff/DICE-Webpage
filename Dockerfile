FROM --platform=arm64 nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY . /app
WORKDIR /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
