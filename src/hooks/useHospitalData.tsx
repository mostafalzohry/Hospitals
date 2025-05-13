import { useState, useEffect } from "react";
import { HospitalData } from "../types/hospital";
import { mockHospitalData } from "../data/mockHospitalData";

export function useHospitalData() {
  const [data, setData] = useState<HospitalData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        setTimeout(() => {
          setData(mockHospitalData);
          setLoading(false);
        }, 500);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch hospital data";
        setError(errorMessage);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
