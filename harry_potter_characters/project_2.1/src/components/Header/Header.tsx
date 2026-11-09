interface HeaderProps {
    nameFilter: string;
    onNameFilterChange: (value: string) => void;
    schoolFilter: string;
    onSchoolFilterChange: (value: string) => void;
}

export function Header({
    nameFilter,
    onNameFilterChange,
    schoolFilter,
    onSchoolFilterChange,
}: HeaderProps) {
    return (
        <header className="header">
            <h1 className="header-title">Harry Potter</h1>
            <p className="header-subtitle">
                View all characters from the Harry Potter universe
            </p>
            <div className="filters-container">
                <div className="filter-field">
                    <label htmlFor="name-filter" className="filter-label">
                        Name
                    </label>
                    <input
                        id="name-filter"
                        type="text"
                        placeholder="Hermione"
                        value={nameFilter}
                        onChange={(e) => onNameFilterChange(e.target.value)}
                        className="filter-input"
                    />
                </div>
                <div className="filter-field">
                    <label htmlFor="school-filter" className="filter-label">
                        School
                    </label>
                    <select
                        id="school-filter"
                        value={schoolFilter}
                        onChange={(e) => onSchoolFilterChange(e.target.value)}
                        className="filter-select"
                    >
                        <option value="">Choose one</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                    </select>
                </div>
            </div>
            <hr className="divider" />
        </header>
    );
}
