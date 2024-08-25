"use client";
import { OptionsTabsType } from "@/types/tabOptions";
import React from "react";
import "./button-group.scss";

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
            className={`
                text-center 
                flex-grow 
                font-montserrat 
                font-semibold  
                text-[16px] 
                leading-[20px] 
                
                ${
              currentOption === option.value
                ? "button-group button-group-active"
                : "button-group"
            }`}
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
