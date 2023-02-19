import React from "react";
import '../Styles/Bulma.css'
import ListUser from "../Components/ListUser";
import "../Styles/CustomStyles.css"
import { createSearchParams, useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate({
            pathname: "/home",
            search: createSearchParams({
              role: "ADMIN"
            }).toString()
          });
    }

    return(
        <div>
            <button onClick={goHome} className="button is-link admin-button">Home</button>
            <section className="section">
                <ListUser />
            </section>
        </div>
    );
}

export default Admin;
