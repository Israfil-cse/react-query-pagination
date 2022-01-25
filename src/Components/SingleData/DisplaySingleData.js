import React from 'react';

const DisplaySingleData = ({ data }) => {
    return (
        <div class="card w-100 m-2 border-rounded " >
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <p class="card-text">User Id: {data.user_id} </p>
                    <p class="card-text"> Id: {data.id}</p>
                </div>
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">{data.body}</p>
            </div>
        </div>
    );
};

export default DisplaySingleData;