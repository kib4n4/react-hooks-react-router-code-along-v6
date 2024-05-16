import NavBar from "../components/NavBar";
function Login(){
    return(
        <>
        <header>
            {/*space for NAvBar */}
            <NavBar/>
        </header>
        <main>
            <h1>Login</h1>
            <form>
                <div>
                    <label For="username">Username</label>
                    <input type="text" name="username" id="username"/>
                </div>
                <br/>
                <div>
                    <label for="password"> password: </label>
                    <input id="password" type="password" name="password" placeholder="password"/>
                </div>
                <br/>
                <button type="submit">submit</button>
            </form>
        </main>
        </>
    );
};
export default Login;