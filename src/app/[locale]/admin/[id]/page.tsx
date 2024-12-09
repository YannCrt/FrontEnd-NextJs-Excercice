"use client";

import React from 'react';
import AdminId from '../../UI/Components/Admin/id/AdminId';

const CandidatePage = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id, 10); // Convertir l'id en entier

  return (
    <div>
      <AdminId id={id} />
    </div>
  );
};

export default CandidatePage;
