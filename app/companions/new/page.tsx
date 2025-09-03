import CompanionForm from "@/components/CompanionForm";
import React from "react";

function NewCompanion() {
  return (
    <main className="min-lg:w-2/4 min-md:w-2/3 border items-center justify-center pb-2">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
}

export default NewCompanion;
