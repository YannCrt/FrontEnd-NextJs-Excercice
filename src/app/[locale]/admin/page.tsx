"use client";

import React, { useEffect } from "react";
import { Candidate } from "../fakeData/candidate";
import Link from "next/link"; // Utilisation de next/link standard
import { useDispatch, useSelector } from "react-redux";
import { setCandidateCount } from "../../../store/slice";
import { RootState } from "../../../store/store";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl"; // Si tu veux récupérer la locale active
import CandidateForeach from "../UI/Components/Admin/CandidateForeach";

const Admin = () => {
  const dispatch = useDispatch();
  const candidateCount = useSelector(
    (state: RootState) => state.counter.candidateCount
  );

  useEffect(() => {
    dispatch(setCandidateCount(Candidate.length));
  }, [dispatch]);

  return (
    <div className="ul-div">
      <h3>
        Liste des Candidats
      </h3>

      <p>
        Nombre total de candidats : {candidateCount}
      </p>
      <CandidateForeach/>
      <div></div>
    </div>
  );
};

export default Admin;
