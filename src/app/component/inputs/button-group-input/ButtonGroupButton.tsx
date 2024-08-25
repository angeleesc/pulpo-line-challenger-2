"use client";
import { OptionsTabsType } from "@/types/tabOptions";
import React from "react";

type MenuTabOptionPropsType = {
  options: OptionsTabsType[];
  setOption: (value: string) => void;
  currentOption: String;
};

export default function ButtonGroupButton({
  options,
  currentOption,
  setOption,
}: MenuTabOptionPropsType) {
  return (
    <div className="flex justify-between">
      {options.map((option, i) => {
        return (
          <button 
          type="button" 
          key={i} 
          className={`text-center flex-grow`}
          onClick={() => setOption(option.value || "")}
          >
            {option.title && option.title}
            {"  "} {option.icon && option.icon}
          </button>
        );
      })}
    </div>
  );
}
