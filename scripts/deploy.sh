

sudo apt-get -y install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt-get update
sudo apt-get -y install nodejs
sudo apt-get -y install npm
sudo apt-get -y install build-essential libssl-dev

#install PM2 for continue run
sudo npm install -g pm2
sudo apt-get update

# Install certbot
sudo add-apt-repository ppa:certbot/certbot -y
sudo apt-get update
sudo apt-get install certbot -y

# Install nginx 

sudo apt-get -y install nginx
sudo apt-get -y install certbot python-certbot-nginx

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo apt update
sudo apt install mongodb-org -y



#Deploy Gotiger
sudo git clone https://Hem-Bad:qazQAZ74107410@github.com/mckinley-and-rice/seers-api
sudo chmod 777 -R seers-api/
cd seers-api
sudo git stash
sudo git checkout master
sudo npm install
npm start

sudo chmod 777 -R /var/www/html


sudo git clone https://Hem-Bad:qazQAZ74107410@github.com/mckinley-and-rice/seers-vcall
sudo chmod 777 -R seers-vcall/
cd seers-vcall
sudo git stash
sudo git checkout master
sudo npm install





cd /etc/nginx/sites-available

sudo nano seerstech-api
sudo ln -s /etc/nginx/sites-available/seerstech-api /etc/nginx/sites-enabled/seerstech-api

cd /etc/nginx/sites-available                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
sudo nano seerstech-vcall
sudo ln -s /etc/nginx/sites-available/seerstech-vcall /etc/nginx/sites-enabled/seerstech-vcall

cd /etc/nginx/sites-available 
sudo nano seerstech-doctor
sudo ln -s /etc/nginx/sites-available/seerstech-doctor /etc/nginx/sites-enabled/seerstech-doctor
sudo nano seerstech-admin
sudo ln -s /etc/nginx/sites-available/seerstech-admin /etc/nginx/sites-enabled/seerstech-admin


# Install certbot
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install certbot

# Install nginx 
sudo apt-get update
sudo apt-get -y install nginx
sudo apt-get -y install certbot python-certbot-nginx

sudo chmod -R 755 /var/www



# seersapi.mckinleyrice.com



sudo certbot --nginx -d  sapi.mckinleyrice.com -d www.sapi.mckinleyrice.com --email hemprasad.badgujar@mckinleyrice.com

sudo certbot --nginx -d  sdoctor.mckinleyrice.com -d www.sdoctor.mckinleyrice.com --email hemprasad.badgujar@mckinleyrice.com

sudo certbot --nginx -d  sadmin.mckinleyrice.com -d www.sadmin.mckinleyrice.com --email hemprasad.badgujar@mckinleyrice.com
sudo certbot --nginx -d  svcall.mckinleyrice.com -d www.svcall.mckinleyrice.com --email hemprasad.badgujar@mckinleyrice.com
sudo certbot renew --dry-run
