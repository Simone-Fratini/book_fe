import { Pagination, Stack } from "@mui/material";

function PaginationRounded({
    count,
    page,
    setPage,
    setIsPageChanged,
}) {
    const handleChange = (e, value) => {
        setPage(value);
        setIsPageChanged(true);
    };
    return (
        <Stack spacing={2}>
            <Pagination
                page={page}
                count={count}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            />
        </Stack>
    );
}

export default PaginationRounded;
