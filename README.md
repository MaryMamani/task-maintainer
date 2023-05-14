<a name="readme-top"></a>
<br />
<div align="center">
  <h1 align="center">Task Maintainer Application</h1>

  <p align="center">
    An application to create, manage and follow tasks
  </p>
</div>


<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#extra-step">Extra Step</a></li>
      </ul>
    </li>
    <li>
       <a href="#usage">Usage</a>
       <ul>
        <li><a href="#frontend-app">Frontend</a></li>
        <li><a href="#backend-services">Backend</a></li>
       </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


## About The Project

This project is a Full Stack application

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Vite][Vite]][Vite-url]
* [![React][React.js]][React-url]
* [![Spring][Spring]][Spring-url]
* [![Java][Java]][Java-url]
* [![Postgres][Postgres]][Postgres-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

* NodeJs 20.1+
* Java JDK 17+
* Postgres 15.2+

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/MaryMamani/task-maintainer.git
   ```
2. Install Yarn packages in the frontend-app
   ```sh
   cd frontend-app
   yarn install
   ```
3. Install Maven packages in the backend service
   ```sh
   cd backend-app
   mvn clean install -U
   ```
4. Create the following database in Postgres
    ```sh
    CREATE DATABASE taskdb;
    ```

## Usage

### Frontend App

 1. Start the App in development mode 
    ```sh
    cd frontend-app
    yarn dev
    ```

### Backend Service

 1. Start the backend service
    ```sh
    cd backend-app
    mvn spring-boot:run
    ```

### Swagger Documentation

 1. After running the backend services, follow this link:
    ```sh
    http://localhost:8090/swagger-ui/index.html
    ```

### Unit Test

 1. Run your backend tests using the following command:
    ```sh
    cd backend-app
    mvn test
    ```

 1. Run your frontend tests using the following command:
    ```sh
    cd frontend-app
    yarn test
    ```



<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Acknowledgments

* [Material UI](https://mui.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Spring]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
[Spring-url]: https://spring.io/
[Java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white
[Java-url]: https://www.java.com/en/
[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/

