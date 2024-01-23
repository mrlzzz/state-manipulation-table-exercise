import { useState } from "react";
import TableRow from "./TableRow";
import { DogBreedType, SortOrder, SortOrderType } from "../types/DogBreedType";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";

const defaultSortOrder: SortOrderType = {
    id: SortOrder.DEFAULT,
    name: SortOrder.DEFAULT,
    avgWeight: SortOrder.DEFAULT,
    avgHeight: SortOrder.DEFAULT,
    avgLifespan: SortOrder.DEFAULT,
    isActive: SortOrder.DEFAULT,
};

const createInitialSortOrder = (): SortOrderType => ({
    id: SortOrder.ASC,
    name: SortOrder.DEFAULT,
    avgWeight: SortOrder.DEFAULT,
    avgHeight: SortOrder.DEFAULT,
    avgLifespan: SortOrder.DEFAULT,
    isActive: SortOrder.DEFAULT,
});

type TableProps = {
    title: string;
    data: DogBreedType[] | null;
    setData: React.Dispatch<React.SetStateAction<DogBreedType[] | null>>;
    itemsPerPage: number;
};

const Table = ({ title, data, setData, itemsPerPage }: TableProps) => {
    // Pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil((data?.length ?? 0) / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Sorting
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
                ...defaultSortOrder,
                [property]:
                    sortOrder[property] === SortOrder.ASC
                        ? SortOrder.DESC
                        : SortOrder.ASC,
            });
        }
    };

    return (
        <div className="">
            <div className="p-10 border border-black/50">
                <h1 className="font-bold text-2xl my-3">{title}</h1>
                <table className="table-auto">
                    <thead>
                        {data ? (
                            <TableHeader
                                headers={Object.keys(data[0])}
                                sortData={sortData}
                                sortOrder={sortOrder}
                            />
                        ) : (
                            <tr>
                                <th>No data</th>
                            </tr>
                        )}
                    </thead>
                    <tbody>
                        {currentItems?.map((dog, idx) => (
                            <TableRow key={idx} rowData={dog} />
                        ))}
                    </tbody>
                </table>
                <TablePagination
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        </div>
    );
};

export default Table;
