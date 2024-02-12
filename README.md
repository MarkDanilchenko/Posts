## Description

Used technologies:

- VueJS (Vue3);
- Bootstrap5;
- Webpack;
- Docker and docker compose;
- NGINX;
- CSS/SCSS/HTML.

## Launch instructions

1. Clone/pull repository to your local project folder;

2. For this step you should already have installed Docker and docker compose on your PC:

- make sure You are in local project folder:

  ```
  cd '.../project_folder'
  ```

- Run docker compose:

  ```
  docker compose up --build
  ```

- Installation can take some time, it depends on your PC resources;
- After the installation is completed, the NGINX-server will start automatically at host:port - **127.0.0.1:8081**;
- Open app using <http://127.0.0.1:8081/> in your browser;

3. Note, that there is no DataBase in the project;

4. To stop the NGINX-server press in terminal:

    ```
    Ctrl + C
    ```

5. To completely remove all created docker containers, images and volumes:

   ```
   docker-compose down --volumes
   ```

### Screenshots

1. *Main page (white & dark themes)*

![Main page(white theme)](screenshots/ScrShot_2.png)
![Main page(dark theme)](screenshots/ScrShot_1.png)

2. *Main posts page and dynamic search*

![Main page & dynamic search](screenshots/ScrShot_3.png)

3. *Three sort options*

![Sort options](screenshots/ScrShot_4.png)

4. *Add Your own new posts with modal*
![Add new post: modal](screenshots/ScrShot_5.png)

5. *Post detailed info*
![Post detailed info](screenshots/ScrShot_6.png)

6. *Mobile look like*

<div align="center">
  <img src="screenshots/ScrShot_7.png" width="50%" height="50%" alt='Mobile look 1'>
  <img src="screenshots/ScrShot_8.png" width="50%" height="50%" alt='Mobile look 2'>
  <img src="screenshots/ScrShot_9.png" width="50%" height="50%" alt='Mobile look 3'>
</div>
