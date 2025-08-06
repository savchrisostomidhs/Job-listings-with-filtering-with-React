import "./Filter.css"

function Filter({ filter, setFilter }:
    { filter: string[], setFilter: React.Dispatch<React.SetStateAction<string[]>> }) {
    const handleDelete = (name: string) => {
        setFilter(prev => {
            const index = prev.indexOf(name);
            const newAr = [...prev];
            newAr.splice(index, 1)
            return newAr;
        });
    }

    return (
        <section className="filter-section">
            {filter.length !== 0 && <div className="filter">
                <div className="filters">
                    {filter.map((f, i) =>
                        <div className="filter-category" key={i}>
                            <p>{f}</p>
                            <div onClick={() => handleDelete(f)} className="close-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                                    <path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" />
                                </svg>
                            </div>
                        </div>)
                    }
                </div>
                <div onClick={() => setFilter([])} className="clear">
                    <p className="clear-button">Clear</p>
                </div>
            </div>}
        </section>
    )
}

export default Filter