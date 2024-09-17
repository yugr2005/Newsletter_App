export function Navbar() {
    return (
        <div className="bg-gray-800 text-white">
            <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                {/* Logo/Title */}
                <div className="text-2xl font-bold">
                    Times Of India
                </div>

                {/* Navbar buttons */}
                <div className="flex space-x-6">
                    <button className="hover:bg-gray-700 px-4 py-2 rounded">Home</button>
                    <button className="hover:bg-gray-700 px-4 py-2 rounded">About</button>
                    <button className="hover:bg-gray-700 px-4 py-2 rounded">Contact</button>
                </div>
            </div>
        </div>
    );
}
