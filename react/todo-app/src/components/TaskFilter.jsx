
export default function TaskFilter({ filterOption, setFilterOption }) {
  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <select value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
}