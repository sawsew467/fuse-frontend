"use client";

import { useState } from "react";

import { Experience } from "./Experience";
import Ribbon from "./Ribbon";
import SignInCard from "../SignInModule/SignInCard";
import SignUpCard from "../SignInModule/SignUpCard";

function SignUpModule() {
  const [mode, setMode] = useState<"SIGNIN" | "SIGNUP">("SIGNUP");

  return (
    <>
      <section className="flex items-center justify-center">
        <SignInCard mode={mode} setMode={setMode} />
        <SignUpCard mode={mode} setMode={setMode} />
      </section>
      <Experience mode={mode} />
      {/* <Ribbon mode={mode} /> */}
    </>
  );
}

export default SignUpModule;
