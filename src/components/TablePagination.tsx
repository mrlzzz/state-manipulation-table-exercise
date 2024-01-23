type TablePaginationProps = {
    currentPage: number;
    totalPages: number;
    handlePageChange: (pageNumber: number) => void;
};

const TablePagination = ({
    currentPage,
    totalPages,
    handlePageChange,
}: TablePaginationProps) => {
    return (
        <div className="flex py-6 justify-center [&>*]:px-2">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                    className="disabled:font-bold"
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="disabled:text-black/50"
            >
                Next
            </button>
        </div>
    );
};

export default TablePagination;
