import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between border p-2">
            <h1>Dishloop</h1>
            <div className="flex">
                <p>Home</p>
                <p>About</p>
            </div>
        </div>
    )
}

export default Navbar;