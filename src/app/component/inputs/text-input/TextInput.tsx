import {
  Input,
  InputProps as MaterialInputProps,
} from "@material-tailwind/react";
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
  placeholder,
  ...rest
}: InputProps) {
  return (
    <label>
      {texttLabel && (
        <h6 className="text-base font-bold mb-5">{texttLabel} </h6>
      )}
      {/* <input className="w-full" {...rest} /> */}
      {/* <Input   /> */}

      <div className="relative w-full min-w-[200px] h-10">
        <input
          className={`
            peer 
            w-full 
            h-full 
            bg-transparent 
            text-body-100 
            focus:outline-0 
            font-montserrat
            font-medium
            disabled:bg-blue-gray-50 
            disabled:border-0 
            transition-all 
            placeholder-shown:border
            placeholder-shown:border-body-60
            placeholder-shown:border-t-body-60
            border
            border-t-transparent
            focus:border-t-transparent
            text-sm
            px-4 
            py-4 
            rounded-[4px] 
            border-body-60 
            focus:border-body-100`}
          placeholder=" "
          {...rest}
        />
        {placeholder && (
          <label
            className={`
        flex 
        w-full 
        h-full 
        select-none 
        pointer-events-none 
        absolute 
        left-0 
        font-medium 
        font-montserrat
        !overflow-visible 
        truncate 
        peer-placeholder-shown:text-body-60
        leading-tight 
        peer-focus:leading-tight 
        peer-disabled:text-transparent 
        peer-disabled:peer-placeholder-shown:text-blue-gray-500 
        transition-all 
        -top-1.5 
        peer-placeholder-shown:text-sm 
        text-[11px] 
        peer-focus:text-[11px] 
        before:content[' '] 
        before:block 
        before:box-border 
        before:w-2.5 
        before:h-1.5 
        before:mt-[6.5px] 
        before:mr-1 
        peer-placeholder-shown:before:border-transparent 
        before:rounded-[4px]  before:border-t 
        peer-focus:before:border-t
        before:border-l 
        peer-focus:before:border-l
        before:pointer-events-none 
        before:transition-all 
        peer-disabled:before:border-transparent 
        after:content[' '] 
        after:block 
        after:flex-grow 
        after:box-border 
        after:w-2.5 after:h-1.5 after:mt-[6.5px] 
        after:ml-1 
        peer-placeholder-shown:after:border-transparent 
        after:rounded-[4px]
        after:border-t peer-focus:after:border-t
        after:border-r peer-focus:after:border-r
        after:pointer-events-none after:transition-all 
        peer-disabled:after:border-transparent 
        peer-placeholder-shown:leading-[3.75] 
        text-gray-500 peer-focus:text-gray-900 
        before:border-body-60 
        peer-focus:before:!border-gray-900 
        after:border-body-60 peer-focus:after:!border-gray-900`}
          >
            {placeholder}
          </label>
        )}
      </div>
      {info && <p className="font-medium text-xs text-body-80 mt-1" >{info}</p>}
      {erroMessage && <p>{erroMessage}</p>}
    </label>
  );
}
