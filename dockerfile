# Node image bind
FROM node:18
# Make directory
WORKDIR /app
# Copy Files (from to)
COPY . .
# install package
RUN npm install
# port
EXPOSE 3000

CMD ["node", "server"]