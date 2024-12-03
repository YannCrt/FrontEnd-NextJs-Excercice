import { UseDispatch, useSelector } from "react-redux";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white bg-gradient-to-r">
      <div className="max-w-xl rounded-lg border-2 border-black bg-white p-6 text-center shadow-lg">
        <h1 className="mb-4 text-5xl font-bold text-gray-800">
          Bienvenue sur mon site !
        </h1>
        <p className="mb-6 text-xl text-gray-600">
          Ceci est un test Tailwind CSS avec Next.js et TypeScript.
        </p>
      </div>
    </div>
  );
}
