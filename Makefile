rerun:
	docker build -t pandora-frontend .
	docker container stop pandora-frontend
	docker container rm pandora-frontend
	docker run --name pandora-frontend -d --publish 3010:80 pandora-frontend
