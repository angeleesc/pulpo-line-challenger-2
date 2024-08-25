import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  texttLabel?: string | null;
  info?: string | null;
  erroMessage?: string | null;
}

export default function TextInput({
  texttLabel,
  info,
  erroMessage,
  ...rest
}: InputProps) {
  return (
    <label>
      {texttLabel && <h6>{texttLabel} </h6>}
      <input className="w-full" {...rest} />
      {info && <p>{info}</p>}
      {erroMessage && <p>{erroMessage}</p>}
    </label>
  );
}
