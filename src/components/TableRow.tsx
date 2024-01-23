import { DogBreedType } from "../types/DogBreedType";

type TableRowProps = {
    rowData: DogBreedType;
};

const TableRow = ({ rowData }: TableRowProps) => {
    const tableCells = Object.values(rowData).map((value, idx) => (
        <td
            className={`p-2 border-r border-b border-black/20 last:border-r-0`}
            key={idx}
        >
            {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
        </td>
    ));

    return <tr>{tableCells}</tr>;
};

export default TableRow;
