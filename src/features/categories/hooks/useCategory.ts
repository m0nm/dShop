import { useQuery } from "react-query";
import { getCategories, ICategory } from "../api";

export const useCategory = () => useQuery(["categories"], getCategories);
