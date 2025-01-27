/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div
      id="error-page"
      className="flex items-center justify-center h-screen w-screen flex-col bg-gray-900 text-white"
    >
      <h1 className="">Oops!</h1>
      <p className="py-1">Sorry, an unexpected error has occurred.</p>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
}
