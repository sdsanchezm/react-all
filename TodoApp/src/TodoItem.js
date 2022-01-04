import React from "react";

function TodoItem(props) {
    return (
        <div class="card">
            <div class="card-body">
                    <button href="#" type="button" class="btn btn-success btn-sm">Ok</button>
                    <button href="#" type="button" class="btn btn-danger btn-sm">Del</button>
                    <span class="card-text">{props.text}</span>
            </div>
        </div>
    );
}

export { TodoItem };