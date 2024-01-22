import { SortOrder, SortOrderType } from "../types/DogBreedType";

const upIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m18 15-6-6-6 6" />
    </svg>
);

const downIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m6 9 6 6 6-6" />
    </svg>
);

const dotIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12.1" cy="12.1" r="1" />
    </svg>
);
type TableHeaderIndicatorType = {
    sortOrder: SortOrderType;
    property: string;
};
const TableHeaderIndicator = ({
    property,
    sortOrder,
}: TableHeaderIndicatorType) => {
    let headerIcon = dotIcon;
    switch (sortOrder[property as keyof SortOrderType]) {
        case SortOrder.DEFAULT:
            headerIcon = dotIcon;
            break;
        case SortOrder.ASC:
            headerIcon = upIcon;
            break;
        case SortOrder.DESC:
            headerIcon = downIcon;
            break;
        default:
            headerIcon = dotIcon;
    }
    return <div>{headerIcon}</div>;
};

export default TableHeaderIndicator;
