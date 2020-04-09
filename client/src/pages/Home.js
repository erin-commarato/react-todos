import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4"><img src="https://lh3.googleusercontent.com/5CNo4tlDYDJ2N8qyRoLlTKEx7CvuCSdr-iiSaQob5EGRGrvy9QFnX0HufdPGRHWuq7-v" width="100" />Welcome to React Todos! </h1>
        <p className="lead">This is a simple todo app to help keep you organized.</p>
        <hr className="my-4" />
        <p>It is built using React, Express and MongoDB</p>
        <Link to="/login" className="mr-1" >
          <button type="button" className="btn btn-primary btn-lg">
            Login
          </button>
        </Link>
        <Link to="/register" >
          <button type="button" className="btn btn-primary btn-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
