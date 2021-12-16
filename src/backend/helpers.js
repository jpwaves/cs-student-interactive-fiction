
// [inclusive, exclusive)
export const randomizeInRange = (ls, rs) => {
    return Math.random() * (rs - ls) + ls;
};