function Dashboard() {
    const currUser = JSON.parse(window.sessionStorage.getItem("user"));

    if (!currUser || !currUser.isAdmin) return <h1 className="p-4 text-4xl font-bold">Not Authorized</h1>;
    return <h1 className="p-4 text-4xl font-bold">Dashboard</h1>;
}

export default Dashboard;
