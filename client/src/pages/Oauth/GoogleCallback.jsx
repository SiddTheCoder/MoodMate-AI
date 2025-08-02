// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { googleLoginRegister } from "../../feature/auth/authThunks";
// import LoaderModal from "../../components/LoaderModal";

// const GoogleCallback = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get("code");

//     if (code) {
//       dispatch(googleLoginRegister({ code })).then(() => {
//         navigate("/");
//       });
//     } else {
//       navigate("/login");
//     }
//   }, [dispatch, navigate]);

//   return <LoaderModal />;
// };

// export default GoogleCallback;

// top is functionality and below is ui too

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLoginRegister } from "../../feature/auth/authThunks";

const GoogleCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      dispatch(googleLoginRegister({ code }))
        .unwrap()
        .then(() => navigate("/"))
        .catch(() => navigate("/login"));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 bg-white border border-gray-200 shadow-lg px-5 py-3 rounded-xl animate-fade-in">
        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-700 font-medium">
          Signing you in with Google...
        </p>
      </div>
    </div>
  );
};

export default GoogleCallback;

