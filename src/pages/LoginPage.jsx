import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <div className="mt-4 grow flex items-center justify-around">
                <div className="mb-60">
                    <h1 className="text-4xl text-center font-bold mb-4">Login</h1>
                    <form action="" className="max-w-md mx-auto">
                        <input type="email" name="" id="" placeholder="Your courriel adress" />
                        <input type="password" name="" id="" placeholder="***********" />
                        <button type="submit" className="login">Login</button>
                    </form>

                    <div className="text-center py-2">
                        <span className="text-center text-gray-500"> Don't have an account yet ?</span>
                        <Link to={'/register'} className="font-bold mx-2 underline text">Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
}