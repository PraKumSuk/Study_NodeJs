
docker build -t praveespkjava/node6_docker_d1:spkv1.0 .

docker run -d -p 8082:3000 -t praveespkjava/node6_docker_d1:spkv1.0
Note :
index.js = 3000
Dockerfile > Expose 3000
Docker run cmd binding host 8082 to guest 3000
You can verify this with docker ps, which would show port as below
0.0.0.0:8082->3000/tcp

Now open browser and access and you should be able to see a message
http://localhost:8082/

//to login to docker
docker login -u <username> -p <password>

//to push to docker repo
docker push praveespkjava/node6_docker_d1:spkv1.0

you can now find a new repo automatically created with name
node6_docker_d1, under account praveespkjava with tag name
spkv1.0