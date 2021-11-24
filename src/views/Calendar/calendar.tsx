// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

const Calendar: React.FC = () => {
    return (
        <div className="calendarDiv">
            <section>
                <h2>November</h2>
                <Link to="/createactivity">
                    <button>Add new activity</button>
                </Link>
            </section>
        </div>
    );
}
export default Calendar;