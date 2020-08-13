FROM mongo

COPY conditions.csv /conditions.csv
COPY cases.json /cases.json
COPY doctor.json /doctor.json

CMD mongoimport --host $DB_HOST --db $DB_NAME --username $DB_USER --password $DB_PASS --collection conditions --headerline --drop --type csv --file /conditions.csv; mongoimport --host $DB_HOST --db $DB_NAME --username $DB_USER --password $DB_PASS --collection cases --drop --type json --file /cases.json --jsonArray; mongoimport --host $DB_HOST --db $DB_NAME --username $DB_USER --password $DB_PASS --collection doctors --drop --type json --file /doctor.json --jsonArray;