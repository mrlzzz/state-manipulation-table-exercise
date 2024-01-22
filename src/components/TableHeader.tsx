import DogBreedType from "../types/DogBreedType";

type TableHeaderProps = {
    headers: string[];
    sortData: (property: keyof DogBreedType) => void;
};

const TableHeader = ({ headers, sortData }: TableHeaderProps) => {
    const tableHeaders = headers.map((e, idx) => {
        return (
            <th
                className="p-2 cursor-pointer bg-black/10 hover:bg-black/20"
                key={idx}
                onClick={() => {
                    sortData(e as keyof DogBreedType);
                }}
            >
                {e}
            </th>
        );
    });

    return <tr>{tableHeaders}</tr>;
};

export default TableHeader;
