# favorite-series-frontend

This is simple application responsible for collecting favorite TV series. You can add and remove them but there is a limit - 5. 
If you want to add new one you have to type into **Title** input e.g. *Narcos* and in **Platform** input e.g. - *Netflix*. 
You can type anything here but only "netflix" and "hbo" values returns named platform. If you type e.g "Amazon Prime" then 
TV series platform will be **OTHER**. When you click *Reload Page* button you will see updated list. On the list we can see 
added TV series with fields: **ID** (automatically generated),**Title**, **IMDB Rating** (TV series rating fetched from external API) and **Platform**. To remove series type into **ID** input series id.

## How to run
First you have to start backend service of this app. All information here - [favorite-series-service](https://github.com/bartekszerlag/favorite-series-service).
After that in the project directory you need run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
