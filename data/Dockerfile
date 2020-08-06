FROM mongo

COPY conditions.csv /conditions.csv
COPY cases.json /cases.json
COPY doctor.json /doctor.json

CMD mongoimport --host $DB_HOST --db $DB_NAME --username myuser --password $DB_PASS --collection condition --headerline --drop --type csv --file /conditions.csv; mongoimport --host $DB_HOST --db $DB_NAME --username myuser --password $DB_PASS --collection case --drop --type json --file /cases.json --jsonArray; mongoimport --host $DB_HOST --db $DB_NAME --username myuser --password $DB_PASS --collection doctor --drop --type json --file /doctor.json --jsonArray;