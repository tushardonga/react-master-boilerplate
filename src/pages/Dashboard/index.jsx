import React, { useEffect } from "react";

const Dashborad = () => {
  // demo api call
  useEffect(() => {
    let isMounted = true;

    // used to stop the api call when component unmount if any is still in progress
    const controller = new AbortController();

    // const getUsers = async () => {
    //   try {
    //     const response = await axiosPrivate.get("/users", {
    //       signal: controller.signal,
    //     });
    //     console.log(response.data);
    //     isMounted && setUsers(response.data);
    //   } catch (err) {
    //     console.error(err);
    //     navigate("/login", { state: { from: location }, replace: true });
    //   }
    // };

    // getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return <div>Dashborad</div>;
};

export default Dashborad;
