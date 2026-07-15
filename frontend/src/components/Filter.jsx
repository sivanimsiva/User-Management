function Filter({
  search,
  setSearch,
  place,
  setPlace
}) {
  return (
    <div className="flex gap-4 mb-5">

      <input
        type="text"
        placeholder="Search by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-1/2"
      />

      <select
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className="border p-2 rounded w-1/2"
      >
        <option value="">All Places</option>
        <option value="Kochi">Kochi</option>
        <option value="Calicut">Calicut</option>
        <option value="Malappuram">Malappuram</option>
        <option value="Tirur">Tirur</option>
      </select>

    </div>
  );
}

export default Filter;