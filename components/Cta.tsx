import Image from "next/image";
import Link from "next/link";
import React from "react";

function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning your own way</div>
      <h2 className="text-2xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p className="">
        Pick a name, subject, voice, & personality - and start learning through voice conversations that feel natural and fun.

      </p>
      <Image src="images/cta.svg" alt="cta" width={350} height={250} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={14} height={14}/>
        <Link href="/companions/new">
        <p>Build a New Companion</p>
        </Link>
      </button>
      
    </section>
  );
}

export default Cta;
