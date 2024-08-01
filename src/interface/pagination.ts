export interface IPagination {
    currentPage: number;
    totalPages: number;
    handleChangeCurrentPage: (currentPage: number) => void;
}