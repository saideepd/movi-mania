import searchIcon from "../assets/search.svg";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='search'>
        <div>
            <img src={searchIcon} alt="search" />

            <input
                type="text"
                placeholder='Search through thousands of movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
              <button onClick={() => setSearchTerm('')} type="button" className="text-white cursor-pointer text-2xl">
                  &times;
              </button>
            )}
        </div>
    </div>
  )
}

export default Search