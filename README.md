

# ORCHARD THEME
Usually, you only add wordpress theme in the repository. But for the sake of an easy setup, I put the the wordpress site in the repository.

## Installation
### Prerequisite
Before starting make sure you install these following.
- Nodejs - https://nodejs.org/en
- Composer - https://getcomposer.org/
- WP CLI - https://wp-cli.org/

### Clone or download the repository
Ssh - git clone git@github.com:hyperboink/orchard.git
Https - git clone https://github.com/hyperboink/orchard.git

Make sure that the repo or folder can be access in your **local server**. If you are using **xamp** or **mamp** it will be in **htdocs**. But for ubuntu, the common folder would be **/var/www/html**.

### DATABASE
In the repo, you can see that there is a db backup under `backups/orchard_db`. Create a db in your local and **import** it in your **local database**.

After the import is done, try to access it in your local server http://localhost/orchard assuming that you are using the default. If you are using the default you should see a wordpress configuration setup.

But if your **local server is a different url**, then run this in your terminal in the **root directory** of the repository. Make sure to **replace** http://your-local-url-here with **your actual local server url**.
```
wp search-replace http://localhost/orchard http://your-local-url-here
```
or with port
```
wp search-replace http://localhost/orchard http://your-local-url-here:8000
```

### Composer
We need to run the composer in the theme folder since this code is using **vendor autoload** for PSR-4 compliance.
```
cd /wp-content/themes/orchard
```
And then run
```
composer install
```

### Frontend assets
We also need to install the npm packages
```
cd /wp-content/themes/orchard
```
And then run
```
npm install
```

After installing the npm packages, you can compile the frontend assets by running this command.
```
npm run dev
```
or
```
npm run watch
```


