import React from "react";

function ListItem(props) {
    return (


        // 1. create a componenet with a list 
        // 2. wrap the un-numbered list around a map function


        <li className="media">
            <img className="mr-3" src={props.img} alt="Generic placeholder" />
            <div className="media-body">
                <h5 className="mt-0 mb-1">
                    {props.title}
                </h5>
                <p>
                    {props.txt}

                </p><br/><br/><br/><br/><br/><br/><br/>
            </div>

        </li>




    );
}

export default ListItem;
