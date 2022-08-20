## Setup
1. create a postgres db call pizza-db
2. set env or change the `pizza-api/api/src/main/resources/application.properties` 's environment variables with correct jdbc url and user name and password
   - `export $(cat .env | xargs)`
   - above command can be used in mac / ubuntu
3. run gradlew flywayMigrate
4. run gradlew bootRun
5. default url would be localhost:8080
