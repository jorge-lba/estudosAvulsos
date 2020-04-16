#!/bim/bash

ctrl_c(){
    echo 
    echo "Saindo..."
    exit 127
}

trap ctrl_c SIGINT SIGTERM
while : ; do
    echo -en "Agora são exatamente: $(date +%H:%M:%S)\r\r"
done