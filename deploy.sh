ng build --prod
cd dist/ && zip meraz19.zip -r meraz19/ && scp meraz19.zip yl643coddvja@meraz.in:public_html/meraz19.zip
ssh yl643coddvja@meraz.in '/home/yl643coddvja/public_html/deploy.sh &' 
