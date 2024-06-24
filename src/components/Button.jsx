export default ({ children }) => {
    return (
        <div className="flex items-center justify-center">
            <button className="bg-black p-2 w-32 text-white rounded-lg hover:bg-gray-800 transition-all duration-300">{children}</button>
        </div>
    )
}