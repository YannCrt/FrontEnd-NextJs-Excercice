"use client";

import React, { useState } from "react";
import { Candidate } from "../fakeData/candidate";
import { useDispatch, useSelector } from "react-redux";
import { setCandidateCount } from "../../../store/slice";
import { RootState } from "../../../store/store";
import CandidateForeach from "../UI/Components/Admin/CandidateForeach";
import AdminId from "../UI/Components/Admin/id/AdminId";

const Admin = () => {
  const [selectedCandidateId, setSelectedCandidateId] = useState<number | null>(null);
  const dispatch = useDispatch();
  const candidateCount = useSelector(
    (state: RootState) => state.counter.candidateCount
  );

  React.useEffect(() => {
    dispatch(setCandidateCount(Candidate.length));
  }, [dispatch]);

  const handleViewCandidate = (id: number) => {
    setSelectedCandidateId(id);
  };

  const handleBackToList = () => {
    setSelectedCandidateId(null);
  };

  return (
    <div>
      {selectedCandidateId === null ? (
        <div className="ul-div">
          <h3>Liste des Candidats</h3>
          <p>Nombre total de candidats : {candidateCount}</p>
          <CandidateForeach onViewCandidate={handleViewCandidate} />
        </div>
      ) : (
        <div className="candidate-details">
          <AdminId id={selectedCandidateId} onBack={handleBackToList} />
        </div>
      )}
    </div>
  );
};

export default Admin;
