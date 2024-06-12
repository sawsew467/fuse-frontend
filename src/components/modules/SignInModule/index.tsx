"use client";

import { useState } from "react";

import SignUpCard from "./SignUpCard";
import SignInCard from "./SignInCard";
import { Experience } from "./Experience";
import Ribbon from "./Ribbon";

function SignInModule({ pageMode }: { pageMode: "SIGNIN" | "SIGNUP" }) {
  const [mode, setMode] = useState<"SIGNIN" | "SIGNUP">(pageMode);

  return (
    <>
      <Experience mode={mode} />
      <section className="flex items-center justify-center">
        <SignInCard mode={mode} setMode={setMode} />
        <SignUpCard mode={mode} setMode={setMode} />
      </section>
      {/* <Ribbon mode={mode} /> */}
    </>
  );
}

export default SignInModule;
