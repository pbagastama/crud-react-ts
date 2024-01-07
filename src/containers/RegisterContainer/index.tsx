

const RegisterContainer = () => {

    return (
        <div className="register-page">
            <div className="bg-blue-400 h-screen">
                <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                    <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
                        <div
                            className="hidden md:block md:w-1/2 rounded-l-lg"
                            style={{
                                backgroundImage: "url(" + "https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" + ")", 
                                backgroundSize: "cover", 
                                backgroundPosition: "center center",
                            }}>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 p-4">
                            <div className="flex flex-col flex-1 justify-center mb-8">
                                <h1 className="text-4xl text-center font-thin">Register Page</h1>
                                <div className="w-full mt-4">
                                    <form className="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                                        <div className="flex flex-col mt-4">
                                            <div className="relative">
                                                <input autoComplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Fullname" />
                                                <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Fullname</label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-4">
                                            <div className="relative">
                                                <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-4">
                                            <div className="relative">
                                                <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-8">
                                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterContainer