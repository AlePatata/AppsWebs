```
python -m venv venv
venv/Scripts/activate
pip install Flask
pip install PyMySQL
pip install cryptography
flask --debug run
```


Otros comandos de uso del prog: 
```
mysql --host=localhost --user=root --password=12345 --protocol=tcp tarea2

mysql --host=localhost --user=root --password=12345 --protocol=tcp tarea2 < r
egion-comuna.sql

show tables;
desc contacto;
SELECT COUNT(*) FROM comuna;
SELECT COUNT(*) FROM region;

```