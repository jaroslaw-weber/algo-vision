// pages/problems/index.tsx
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { problems } from "../src/problem/list";

const Problems: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>List of Problems</title>
        <meta name="description" content="Browse through a list of all available problems" />
      </Head>

      <main className="container mx-auto p-4  justify-center flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-6">Problems</h1>
        <div className="card bg-base-100 shadow-xl max-w-lg mx-auto">
          <div className="card-body">
            <ul className="list-decimal list-inside">
              {problems.map((problem, index) => (
                <li key={index} className="py-2">
                  <Link className="link link-hover" href={`/problem/${problem.id}`}>
                    {problem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Problems;