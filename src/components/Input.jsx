export default ({ placeholder, onChange }) => {
    return (
        <div>
            <input onChange={(e) => onChange(e.target.value)} className="w-full px-4 py-3 pr-10 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder={placeholder} />
        </div>
    )
}