export const SearchBar = ({ onSearch }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;

        if (form.elements.topic.value.trim() === "") {
            alert("Please enter search term!");
            return;
        };
        onSearch(topic);
        form.reset();
    }
    return (
        <header className="bg-gray-100 p-4 shadow-md">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-4"
        >
          <input
            type="text"
            name="topic"
            placeholder="Search images and photos"
            autoFocus
            autoComplete="off"
            className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>
      </header>

    );
}