docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya_rabota_tatarincev_bpc2001-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya_rabota_tatarincev_bpc2001-java/app ../../..
