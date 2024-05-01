export default function Tai_xe() {
  return (
    <div>
      <div className="mb-5">
        <label
          htmlFor="firstname"
          className="font-bold mb-1 text-gray-700 block"
        >
          Firstname
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="Enter your firstname..."
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="font-bold mb-1 text-gray-700 block">
          Email
        </label>
        <input
          type="email"
          className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="Enter your email address..."
        />
      </div>
    </div>
  );
}
