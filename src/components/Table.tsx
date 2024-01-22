import { useState } from "react";
import TableRow from "./TableRow";
import DogBreedType from "../types/DogBreedType";
import TableHeader from "./TableHeader";

enum SortOrder {
    ASC = "asc",
    DESC = "desc",
}

type SortOrderType = {
    id: SortOrder;
    name: SortOrder;
    avgWeight: SortOrder;
    avgHeight: SortOrder;
    avgLifespan: SortOrder;
    isActive: SortOrder;
};

const createInitialSortOrder = (): SortOrderType => ({
    id: SortOrder.ASC,
    name: SortOrder.ASC,
    avgWeight: SortOrder.ASC,
    avgHeight: SortOrder.ASC,
    avgLifespan: SortOrder.ASC,
    isActive: SortOrder.ASC,
});

type TableProps = {
    title: string;
    data: DogBreedType[] | null;
    setData: React.Dispatch<React.SetStateAction<DogBreedType[] | null>>;
};

const Table = ({ title, data, setData }: TableProps) => {
    const [sortOrder, setSortOrder] = useState<SortOrderType>(
        createInitialSortOrder()
    );

    const sortData = (property: keyof DogBreedType) => {
        if (data !== null) {
            const sortedData = [...data].sort((a, b) => {
                if (typeof data[0][property] === "number") {
                    const valueA = a[property] as number;
                    const valueB = b[property] as number;

                    if (sortOrder[property] === SortOrder.ASC) {
                        return valueA - valueB;
                    } else {
                        return valueB - valueA;
                    }
                } else {
                    if (sortOrder[property] === SortOrder.ASC) {
                        return a.name.localeCompare(b.name);
                    } else {
                        return -a.name.localeCompare(b.name);
                    }
                }
            });
            setData(sortedData);

            setSortOrder({
                ...sortOrder,
                [property]:
                    sortOrder[property] === SortOrder.ASC
                        ? SortOrder.DESC
                        : SortOrder.ASC,
            });
        }
    };

    return (
        <div className="flex">
            <div className="flex flex-col p-10 gap-2"></div>
            <div className="p-10 border border-black/50">
                <h1 className="font-bold text-2xl my-3">{title}</h1>
                <table className="table-auto">
                    <thead>
                        {data ? (
                            <TableHeader
                                headers={Object.keys(data[0])}
                                sortData={sortData}
                            />
                        ) : (
                            <tr>
                                <th>No data</th>
                            </tr>
                        )}
                    </thead>
                    <tbody>
                        {data?.map((dog, idx) => (
                            <TableRow key={idx} rowData={dog} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
