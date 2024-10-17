import React from 'react'

const Jumbotron = () => {
    return (
        <div className="pt-4 mb-4 bg-light container">
            <div className="jumbotron">
                <h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ratione minus assumenda accusantium quisquam eum ipsa, explicabo facere enim odit adipisci sit voluptate, tempore nobis odio itaque exercitationem necessitatibus excepturi.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>
        </div>
    );
};

export default Jumbotron;