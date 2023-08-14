import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "ALL" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With-discount" },
        ]}
      />
    </TableOperations>
  );
};
export default CabinTableOperations;
