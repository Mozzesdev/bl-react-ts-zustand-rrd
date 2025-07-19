import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error es de tipo `ErrorResponse`
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Error desconocido";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        ¡Oops! Algo salió mal.
      </h1>
      <p className="text-lg text-gray-700 mb-2">
        Se ha producido un error inesperado.
      </p>
      <p className="text-md text-gray-500 bg-gray-200 p-2 rounded-md mb-6">
        <i>{errorMessage}</i>
      </p>
      <Link
        to="/"
        className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Volver a la página de inicio
      </Link>
    </div>
  );
};

export default ErrorPage;
