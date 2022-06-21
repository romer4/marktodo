import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GroupList from "../modules/GroupList";
import GroupView from "../modules/GroupView";
import Login from "../modules/Login";
import Register from "../modules/Register";

const RoutesContainer = () => {

    const navigate = useNavigate();

    useEffect(() => (localStorage.getItem("loggedOnce") === null) ? navigate("/login") : () => {}, []);

    return (
        <Routes>
            <Route
                path={"/"}
                element={<GroupList/>}
            />
            <Route
                path={"/group/:groupId"}
                element={<GroupView/>}
            />
            <Route
                path={"/login"}
                element={<Login/>}
            />
            <Route
                path={"/register"}
                element={<Register/>}
            />
        </Routes>
    );
}

export default RoutesContainer;