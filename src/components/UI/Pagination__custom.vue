<template>
    <div class="pagination">
        <div class="pagination__item" :class="{ 'pagination__item__active': page === pageNumber }"
            v-for="pageNumber in totalPages" :key="pageNumber" @click="this.$emit('changePage', pageNumber)">{{ pageNumber }}</div>
    </div>
</template>

<script>
export default {
    name: 'Pagination__custom',
    props: {
        totalPages: {
            type: Number,
            default: 0
        },
        page: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.pagination__item {
    margin-right: 10px;
    border: 2px solid teal;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: 25px;
}

.pagination__item:hover {
    cursor: pointer;
    background-color: teal;
    color: white;
}

.pagination__item__active {
    background-color: teal;
    color: white;
}
</style>