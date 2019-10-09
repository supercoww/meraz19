# ng build --prod
zip dist/meraz19.zip -r dist/meraz19/
scp dist/meraz19.zip yl643coddvja@meraz.in:public_html/meraz19.zip
ssh yl643coddvja@meraz.in 'public_html/deploy.sh'
