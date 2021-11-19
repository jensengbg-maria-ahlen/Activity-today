// @ts-nocheck
import React from "react";
import '../Styles/_landing.scss';

const Upcoming: React.FC = () => { 
    return (
        <>
                <div>
                    <h3 className="greenHeader">Upcoming activites:</h3>
                    <div className="greenDiv">
                        <article className="landingArt">
                            <h4 className="date">11/11</h4>
                            <p className="activity">Adventsmys</p>
                            <button className="editActivity">Edit</button>
                        </article>
                    </div>
                </div>
        </>
    );
}
export default Upcoming;