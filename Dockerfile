FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY out/ /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
