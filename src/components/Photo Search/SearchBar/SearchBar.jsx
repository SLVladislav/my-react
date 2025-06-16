export const SearchBar = () => {
    return (
        <header>
            <form>
                <input
                    type="text"
                    name="topic"
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>

    );
}