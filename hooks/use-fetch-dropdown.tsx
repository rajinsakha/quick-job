import  { apiBase } from "@/constants/axiosInstance";
import { useAppSelector } from "@/lib/redux/hooks";

import { useState, useEffect } from "react";

interface FetchDropdownHook<T> {
  data: T[]; // Array of generic type `T`
  loading: boolean;
  error: Error | null;
}

const useFetchDropdown = <T,>(url: string): FetchDropdownHook<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const refetchDropdown = useAppSelector((state) => state.filterReducer.refetchDropdown);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiBase.get<T[]>(url);
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (err: unknown) {
        setError(err as Error);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, refetchDropdown]);

  return { data, loading, error };
};

export default useFetchDropdown;
