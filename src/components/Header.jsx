import {Link} from 'react-router-dom'
function Header(){
    return (
        <header className="bg-[#720455] text-white flex justify-around items-center p-8">
            <h1 className="text-5xl font-bold">MRP</h1>

            <nav className="w-1/3 text-2xl">
                <ul className="flex justify-around">
                    <li className="hover:cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:cursor-pointer">Favourites</li>
                    <li className="hover:cursor-pointer">Genres</li>
                    <li className="hover:cursor-pointer">Contact Us</li>
                </ul>
            </nav>

            <div className="flex justify-around w-[13%] text-2xl items-center">
                <p className="hover:cursor-pointer">Login</p>
                <p className="hover:cursor-pointer bg-[#4A0653] p-2 rounded-r-xl">Signup</p>
            </div>
        </header>
    )
}

export default Header;