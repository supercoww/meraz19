npm run build:prod
7z a -tzip dist\meraz19.zip dist\meraz19
scp dist/meraz19.zip yl643coddvja@meraz.in:public_html/meraz19.zip
ssh yl643coddvja@meraz.in 'public_html/deploy.sh'
