export type DogBreedType = {
    id: number;
    name: string;
    avgWeight: number;
    avgHeight: number;
    avgLifespan: number;
    isActive: boolean;
};

export enum SortOrder {
    ASC = "asc",
    DESC = "desc",
    DEFAULT = "default",
}

export type SortOrderType = {
    id: SortOrder;
    name: SortOrder;
    avgWeight: SortOrder;
    avgHeight: SortOrder;
    avgLifespan: SortOrder;
    isActive: SortOrder;
};
