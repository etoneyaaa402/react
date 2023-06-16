const Search = (props) => {
    return (
        <div className="search">
            <h1>Поиск товаров</h1>
            <input type="text" onChange={(event) => props.onSearchInputChange(event.target.value)}/>
        </div>
    );
}

export default Search;