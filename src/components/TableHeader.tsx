import { DogBreedType, SortOrderType } from "../types/DogBreedType";
import TableHeaderIndicator from "./TableHeaderIndicator";

type TableHeaderProps = {
    headers: string[];
    sortData: (property: keyof DogBreedType) => void;
    sortOrder: SortOrderType;
};

const TableHeader = ({ headers, sortData, sortOrder }: TableHeaderProps) => {
    const tableHeaders = headers.map((e, idx) => {
        return (
            <th
                className="cursor-pointer bg-black/10 hover:bg-black/20 "
                key={idx}
                onClick={() => {
                    sortData(e as keyof DogBreedType);
                }}
            >
                <div className="py-2 px-8 flex items-center justify-between ">
                    <span>{e}</span>
                    <TableHeaderIndicator property={e} sortOrder={sortOrder} />
                </div>
            </th>
        );
    });

    return <tr>{tableHeaders}</tr>;
};

export default TableHeader;
