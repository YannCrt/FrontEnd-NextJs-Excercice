"use client";  

import React, { useEffect } from "react";
import { Candidate } from "../fakeData/candidate"; 
import { Button } from "antd"; 
import Link from "next/link"; 
import { useDispatch, useSelector } from 'react-redux';
import { setCandidateCount } from '../../store/slice';  
import { RootState } from '../../store/store';  


const Admin = () => {
  const dispatch = useDispatch(); 
  const candidateCount = useSelector((state: RootState) => state.counter.candidateCount);  


  useEffect(() => {

    dispatch(setCandidateCount(Candidate.length));
  }, [dispatch]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-100">
      <h3 className="mb-3 mt-10 p-3 text-2xl font-semibold text-gray-800">
        Liste des Candidats
      </h3>

      <p className="text-lg font-medium text-gray-700">
        Nombre total de candidats : {candidateCount}
      </p>

      <ul className="w-full max-w-2xl space-y-4 rounded-lg bg-white p-4 shadow-md">
        {Candidate.map((candidate) => (
          <li
            key={candidate.id}
            className="flex items-center justify-between border-b p-4 last:border-b-0"
          >
            <span className="text-lg font-medium text-gray-700">
              {candidate.firstname} {candidate.lastname}
            </span>

            <Link href={`/admin/${candidate.id}`} passHref>
              <Button className="!important rounded bg-slate-700 px-4 py-2 text-white hover:bg-slate-600">
                Voir
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      <div className="h-16"></div> 
    </div>
  );
};

export default Admin;
