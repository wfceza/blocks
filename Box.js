import React from "react";

export default function Box(props) {

    const styles = {
        backgroundColor: props.on? "white" : "green"
    }

    return (
        <div style={styles}
        onClick={() => props.toggle(props.id)}
        className="box"
        >

        </div>
    )
}
