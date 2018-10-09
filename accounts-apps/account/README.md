
Run the following command to spin the mysql database
```
docker run --name BBGC -p 3306:3306 -v ${PWD}/mysql-database:/var/lib/mysql -e MYSQL_DATABASE=BBGC -e MYSQL_ROOT_PASSWORD=Passw0rd@123 -d mysql:5.7.22
```