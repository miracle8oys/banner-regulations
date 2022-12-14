import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const base_url = process.env.REACT_APP_BASE_URL;

const useFetch = (url: string, changes: number) => {
  const [data, setData] = useState<Array<any>>([]);
  const [totalData, setTotalData] = useState(0);
  const [error, setError] = useState<null | string>(null);
  // const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    // const refresh_token = localStorage.getItem("refresh_token");

    setError(null);

    fetch(`${base_url + url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          // fetch(`${base_url}/auth/refreshToken`, {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     refresh_token,
          //   }),
          // })
          //   .then((res) => res.json())
          //   .then((result) => {
          //     localStorage.setItem(
          //       "access_token",
          //       `${result.data.access_token}`
          //     );
          //     localStorage.setItem(
          //       "refresh_token",
          //       `${result.data.refresh_token}`
          //     );
          //     setRefresh((current) => current + 1);
          //   });
          navigate("/login");
        }

        if (!res.ok) {
          throw new Error("fetch data failed");
        }

        return res.json();
      })
      .then((result) => {
        setTotalData(result.count);

        setData(result.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url, changes, navigate]);

  return { data, error, totalData };
};

export default useFetch;
